"""Generate the dappled-sunlight background CSS and splice it into the site stylesheet.

Pure CSS: a base background plus three drifting layers of sun spots, appended to
the site's global stylesheet. No JS, no images.

Usage: python3 scripts/gen_dapple.py [css_file ...]   (default: source/app/globals.css)
Re-running replaces the previous blocks (between the markers), so it is idempotent.
"""
import math
import random
import sys

CSS_FILES = sys.argv[1:] or ["source/app/globals.css"]
START = "/*dappled-sunlight:start*/"
END = "/*dappled-sunlight:end*/"

LIGHT = (255, 230, 178)  # warm cream-gold, close to the site's primary-cream #fff1e0
SHADE = (74, 88, 70)     # deep leaf-green shadow


def f(x, n=2):
    s = f"{x:.{n}f}".rstrip("0").rstrip(".")
    return s if s not in ("-0", "") else "0"


def spot(x, y, rx, ry, a, core=0.42):
    r, g, b = LIGHT
    return (
        f"radial-gradient({f(rx)}vmax {f(ry)}vmax at {f(x,1)}% {f(y,1)}%,"
        f"rgba({r},{g},{b},{f(a)}) 0,"
        f"rgba({r},{g},{b},{f(a*0.82)}) {int(core*100)}%,"
        f"rgba({r},{g},{b},{f(a*0.3)}) {int(core*100+28)}%,"
        f"rgba({r},{g},{b},0) 100%)"
    )


def shade(x, y, rx, ry, a):
    r, g, b = SHADE
    return (
        f"radial-gradient({f(rx)}vmax {f(ry)}vmax at {f(x,1)}% {f(y,1)}%,"
        f"rgba({r},{g},{b},{f(a)}) 0,rgba({r},{g},{b},{f(a*0.5)}) 50%,rgba({r},{g},{b},0) 100%)"
    )


def streams(rng, n_streams, per_stream, r_range, a_range, step, core):
    """Spots along meandering random walks, like light pouring through gaps in a canopy."""
    out = []
    for _ in range(n_streams):
        x, y = rng.uniform(4, 96), rng.uniform(4, 96)
        heading = rng.uniform(0, 2 * math.pi)
        for _ in range(rng.randint(*per_stream)):
            r = rng.uniform(*r_range)
            a = rng.uniform(*a_range)
            if rng.random() < 0.17:  # now and then a much bigger, softer patch of light
                r *= rng.uniform(1.7, 2.6)
                a *= 0.8
            out.append(spot(x, y, r * rng.uniform(0.9, 1.05), r * rng.uniform(1.05, 1.3), a, core))
            heading += rng.gauss(0, 0.7)
            d = step * rng.uniform(0.6, 1.2)
            x = min(98, max(2, x + math.cos(heading) * d))
            y = min(98, max(2, y + math.sin(heading) * d))
    return out


def keyframes(name, fn, steps=48):
    """Sample a periodic function into keyframes; with linear timing the loop is seamless."""
    frames = []
    for i in range(steps + 1):
        t = i / steps
        frames.append(f"{f(t*100, 3)}%{{{fn(t)}}}")
    return f"@keyframes {name}{{{''.join(frames)}}}"


TAU = 2 * math.pi


def wobble(t, terms):
    # integer harmonics only -> value at t=0 equals t=1, and so does every derivative
    return sum(a * math.sin(TAU * k * t + p) for a, k, p in terms)


def splice(path, block):
    src = open(path).read()
    if START in src:
        src = src[:src.index(START)] + src[src.index(END) + len(END):]
    open(path, "w").write(src.rstrip("\n") + "\n" + block + "\n")


def main():
    rng = random.Random(1907)

    # Layer 1 (html::before): broad warm glow + soft leaf shadows + big, lazy dapples
    glow = [
        "radial-gradient(70vmax 55vmax at 18% 22%,rgba(255,236,200,.5) 0,rgba(255,236,200,.16) 45%,rgba(255,236,200,0) 100%)",
        "radial-gradient(55vmax 45vmax at 86% 78%,rgba(255,230,196,.26) 0,rgba(255,230,196,.08) 50%,rgba(255,230,196,0) 100%)",
    ]
    shades = [shade(rng.uniform(5, 95), rng.uniform(5, 95), r, r * rng.uniform(.7, 1.2), rng.uniform(.12, .2))
              for r in [rng.uniform(14, 24) for _ in range(6)]]
    big = streams(rng, 6, (4, 6), (4.6, 6.2), (.3, .46), 7, .4)
    layer1 = big + shades + glow

    # Layer 2 (body::before): the classic sun-coin dapples, crisp-ish, clustered
    layer2 = streams(rng, 9, (4, 7), (2.9, 3.9), (.5, .74), 4.8, .5)

    # Layer 3 (body::after): a second set that shimmers out of phase with layer 2
    layer3 = streams(rng, 8, (3, 6), (2.2, 3.1), (.38, .6), 4, .52)

    css = []
    css.append(
        # base: keep the sage palette, add a faint warm wash and a static film grain
        "html.bg-primary-bg{background-color:#a4b19f;background-image:"
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E"
        "%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E"
        "%3CfeColorMatrix values='0 0 0 0 .2 0 0 0 0 .22 0 0 0 0 .18 0 0 0 .5 0'/%3E%3C/filter%3E"
        "%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\"),"
        "radial-gradient(120% 90% at 12% 8%,rgba(226,204,168,.7) 0,rgba(226,204,168,0) 62%),"
        "radial-gradient(90% 80% at 92% 96%,rgba(221,195,164,.65) 0,rgba(221,195,164,0) 60%),"
        "radial-gradient(176.42% 113.35% at 20.76% 45.41%,#9ca99e 1.66%,#828f78 15.7%,#cad5c2 61.96%);"
        "background-size:180px 180px,auto,auto,auto}"
    )
    css.append(".svg-bg{display:none}")
    css.append(
        "html.bg-primary-bg:before,body:before,body:after{content:\"\";position:fixed;inset:-6vmax;"
        "z-index:-1;pointer-events:none;background-repeat:no-repeat;will-change:transform,opacity;"
        "animation-timing-function:linear;animation-iteration-count:infinite}"
    )
    css.append(
        "html.bg-primary-bg:before{background-image:" + ",".join(layer1) + ";"
        "animation-name:ds-drift-a,ds-turn-a,ds-breathe-a;animation-duration:41s,59s,23s}"
    )
    css.append(
        "body:before,body:after{mix-blend-mode:screen}"
        "body:before{background-image:" + ",".join(layer2) + ";"
        "animation-name:ds-sway-b,ds-turn-b,ds-shimmer-b;animation-duration:17s,23s,11s}"
    )
    css.append(
        "body:after{background-image:" + ",".join(layer3) + ";"
        "animation-name:ds-sway-c,ds-turn-c,ds-shimmer-c;animation-duration:13s,19s,7s}"
    )

    def tr(ax, ay, terms_x, terms_y):
        return lambda t: f"translate:{f(wobble(t, terms_x)*ax, 3)}vmax {f(wobble(t, terms_y)*ay, 3)}vmax"

    def rot(deg, terms):
        return lambda t: f"rotate:{f(wobble(t, terms)*deg, 3)}deg"

    def op(lo, hi, terms):
        norm = sum(a for a, _, _ in terms)
        return lambda t: f"opacity:{f(lo + (hi-lo)*(wobble(t, terms)/norm*0.5+0.5), 3)}"

    css += [
        keyframes("ds-drift-a", tr(2.0, 1.5, [(1, 1, 0), (.35, 2, 1.3)], [(1, 1, 1.9), (.3, 3, .4)])),
        keyframes("ds-turn-a", rot(1.1, [(1, 1, 0), (.25, 2, 2.1)])),
        keyframes("ds-breathe-a", op(.78, 1, [(1, 1, 0), (.4, 3, .8)])),
        # wind gusts: fundamental + a quicker harmonic that adds flutter
        keyframes("ds-sway-b", tr(1.8, 1.2, [(1, 1, 0), (.45, 3, .7), (.15, 7, 2.2)], [(1, 1, 1.1), (.4, 2, 2.6), (.12, 5, .3)])),
        keyframes("ds-turn-b", rot(1.4, [(1, 1, .5), (.3, 3, 1.7)])),
        keyframes("ds-shimmer-b", op(.55, 1, [(1, 1, 0), (.5, 2, 1.1), (.3, 5, 2.4)])),
        keyframes("ds-sway-c", tr(1.6, 1.3, [(1, 1, 2.2), (.5, 2, .2), (.18, 6, 1.5)], [(1, 1, .4), (.45, 3, 2.9), (.15, 8, 1.2)])),
        keyframes("ds-turn-c", rot(-1.6, [(1, 1, 1.4), (.35, 2, .6)])),
        # out of phase with layer b so spots seem to blink as leaves flutter
        keyframes("ds-shimmer-c", op(.35, 1, [(1, 1, math.pi), (.5, 2, 2.6), (.35, 4, .9)])),
        "@media (prefers-reduced-motion:reduce){html.bg-primary-bg:before,body:before,body:after{animation:none}}",
    ]

    block = START + "".join(css) + END
    for path in CSS_FILES:
        splice(path, block)
    print(f"{len(block)} bytes, spots: {len(big)}+{len(layer2)}+{len(layer3)}")


main()
