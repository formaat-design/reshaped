/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["reshaped"],
  modularizeImports: {
    reshaped: {
      transform: {
        // Utilities
        // classNames: "reshaped/utilities/classNames",

        // Hooks
        useToast: "reshaped/components/Toast",
        // useFormControl: "reshaped/components/FormControl",
        // useTheme: "reshaped/components/Theme",
        "use.*": "reshaped/hooks/{{ member }}",

        // Components
        "*": "reshaped/components/{{ member }}",
      },
    },
  },
};

module.exports = nextConfig;
