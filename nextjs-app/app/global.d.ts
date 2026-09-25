declare module "aos" {
  const AOS: {
    init: (options?: any) => void;
    refresh: () => void;
  };
  export default AOS;
}

declare var grecaptcha: {
  execute(siteKey: string, options: { action: string }): Promise<string>;
  ready(callback: () => void): void;
};
