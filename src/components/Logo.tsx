import logo from "@/assets/logo.png";

export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src={logo}
      alt="Iraivazhi Yin Yang logo"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
