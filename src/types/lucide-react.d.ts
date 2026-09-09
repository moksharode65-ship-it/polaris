import * as React from "react";

declare module "lucide-react" {
  export interface SVGProps extends React.SVGProps<SVGSVGElement> {
    // Lucide specific props can be added here if needed
  }

  // Common icons used in the project
  export const Search: React.FC<SVGProps>;
  export const Compass: React.FC<SVGProps>;
  export const Eye: React.FC<SVGProps>;
  export const Road: React.FC<SVGProps>;
  export const Menu: React.FC<SVGProps>;
  export const Settings: React.FC<SVGProps>;
  export const LogOut: React.FC<SVGProps>;
}