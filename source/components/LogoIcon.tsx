import React from 'react';

const logos = [
    'python',
    'java',
    'javascript',
    'postgresql',
    'django',
    'spring',
    'nextjs-icon',
    'react',
    'express',
    'flutter',
    'sap',
    'godot',
    'unity',
    'figma',
    'google-cloud', 
    'laravel',
    'pytorch'
  ];
  
  const logoClasses: { [key: string]: string } = {
    python: 'icon-[logos--python]',
    pytorch: 'icon-[logos--pytorch]',
    java: 'icon-[logos--java]',
    javascript: 'icon-[logos--javascript]',
    postgresql: 'icon-[logos--postgresql]',
    vue: 'icon-[logos--vue]',
    django: 'icon-[logos--django]',
    spring: 'icon-[logos--spring]',
    firebase: 'icon-[logos--firebase]',
    'nextjs-icon': 'icon-[logos--nextjs-icon]',
    react: 'icon-[logos--react]',
    express: 'icon-[logos--express]',
    flutter: 'icon-[logos--flutter]',
    sap: 'icon-[logos--sap]',
    godot: 'icon-[logos--godot]',
    unity: 'icon-[logos--unity]',
    figma: 'icon-[logos--figma]',
    laravel: 'icon-[logos--laravel]',
    'google-cloud': 'icon-[logos--google-cloud]'
    
  };
interface LogoIconProps {
  logo: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ logo }) => {
  return (
    <span className="inline-block p-1 bg-primary-cream bg-opacity-20 pb-0 rounded-full transform hover:scale-150">
        <i className={logoClasses[logo]}></i>
    </span>
  );
};

export default LogoIcon;
