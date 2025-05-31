import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "rgb(var(--tw-prose-body))",
            '[class~="lead"]': {
              color: "rgb(var(--tw-prose-lead))",
            },
            a: {
              color: "rgb(var(--tw-prose-links))",
              textDecoration: "underline",
              fontWeight: "500",
            },
            strong: {
              color: "rgb(var(--tw-prose-bold))",
              fontWeight: "600",
            },
            'ol[type="A"]': {
              "--list-counter-style": "upper-alpha",
            },
            'ol[type="a"]': {
              "--list-counter-style": "lower-alpha",
            },
            'ol[type="A" s]': {
              "--list-counter-style": "upper-alpha",
            },
            'ol[type="a" s]': {
              "--list-counter-style": "lower-alpha",
            },
            'ol[type="I"]': {
              "--list-counter-style": "upper-roman",
            },
            'ol[type="i"]': {
              "--list-counter-style": "lower-roman",
            },
            'ol[type="I" s]': {
              "--list-counter-style": "upper-roman",
            },
            'ol[type="i" s]': {
              "--list-counter-style": "lower-roman",
            },
            'ol[type="1"]': {
              "--list-counter-style": "decimal",
            },
            ol: {
              "list-style-type": "var(--list-counter-style, decimal)",
            },
            "ul > li": {
              position: "relative",
            },
            "ol > li": {
              position: "relative",
            },
            "ul > li::before": {
              content: '""',
              position: "absolute",
              backgroundColor: "rgb(var(--tw-prose-bullets))",
              borderRadius: "50%",
              width: "0.375em",
              height: "0.375em",
              top: "calc(0.875em - 0.1875em)",
              left: "0.25em",
            },
            "ol > li::before": {
              content:
                'counter(list-item, var(--list-counter-style, decimal)) "."',
              position: "absolute",
              fontWeight: "400",
              color: "rgb(var(--tw-prose-counters))",
              left: "0",
            },
            "ul > li p": {
              marginTop: "0.75em",
              marginBottom: "0.75em",
            },
            "ol > li p": {
              marginTop: "0.75em",
              marginBottom: "0.75em",
            },
            "ul > li > *:first-child": {
              marginTop: "1.25em",
            },
            "ol > li > *:first-child": {
              marginTop: "1.25em",
            },
            "ul > li > *:last-child": {
              marginBottom: "1.25em",
            },
            "ol > li > *:last-child": {
              marginBottom: "1.25em",
            },
            "ul > li p": {
              marginTop: "0.75em",
              marginBottom: "0.75em",
            },
            "ol > li p": {
              marginTop: "0.75em",
              marginBottom: "0.75em",
            },
            "> ul > li p": {
              marginTop: "0.75em",
              marginBottom: "0.75em",
            },
            "> ol > li p": {
              marginTop: "0.75em",
              marginBottom: "0.75em",
            },
            li: {
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },
            "> ul > li": {
              paddingLeft: "1.75em",
            },
            "> ol > li": {
              paddingLeft: "1.75em",
            },
            "> ul > li::before": {
              height: "0.3125em",
              width: "0.3125em",
              top: "calc(0.875em - 0.15625em)",
              left: "0.25em",
            },
            "> ol > li::before": {
              left: "0",
            },
            hr: {
              borderColor: "rgb(var(--tw-prose-hr))",
              borderTopWidth: 1,
              marginTop: "3em",
              marginBottom: "3em",
            },
            blockquote: {
              fontWeight: "500",
              fontStyle: "italic",
              color: "rgb(var(--tw-prose-quotes))",
              borderLeftWidth: "0.25rem",
              borderLeftColor: "rgb(var(--tw-prose-quote-borders))",
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: "1.6em",
              marginBottom: "1.6em",
              paddingLeft: "1em",
            },
            "blockquote p:first-of-type::before": {
              content: "open-quote",
            },
            "blockquote p:last-of-type::after": {
              content: "close-quote",
            },
            h1: {
              color: "rgb(var(--tw-prose-headings))",
              fontWeight: "800",
              fontSize: "2.25em",
              marginTop: "0",
              marginBottom: "0.8888889em",
              lineHeight: "1.1111111",
            },
            "h1 strong": {
              fontWeight: "900",
              color: "inherit",
            },
            h2: {
              color: "rgb(var(--tw-prose-headings))",
              fontWeight: "700",
              fontSize: "1.5em",
              marginTop: "2em",
              marginBottom: "1em",
              lineHeight: "1.3333333",
            },
            "h2 strong": {
              fontWeight: "800",
              color: "inherit",
            },
            h3: {
              color: "rgb(var(--tw-prose-headings))",
              fontWeight: "600",
              fontSize: "1.25em",
              marginTop: "1.6em",
              marginBottom: "0.6em",
              lineHeight: "1.6",
            },
            "h3 strong": {
              fontWeight: "700",
              color: "inherit",
            },
            h4: {
              color: "rgb(var(--tw-prose-headings))",
              fontWeight: "600",
              marginTop: "1.5em",
              marginBottom: "0.5em",
              lineHeight: "1.5",
            },
            "h4 strong": {
              fontWeight: "700",
              color: "inherit",
            },
            img: {
              marginTop: "2em",
              marginBottom: "2em",
            },
            picture: {
              marginTop: "2em",
              marginBottom: "2em",
            },
            "picture > img": {
              marginTop: "0",
              marginBottom: "0",
            },
            video: {
              marginTop: "2em",
              marginBottom: "2em",
            },
            kbd: {
              fontWeight: "500",
              fontFamily: "inherit",
              color: "rgb(var(--tw-prose-kbd))",
              boxShadow:
                "0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%)",
              fontSize: "0.875em",
              borderRadius: "0.3125rem",
              paddingTop: "0.1875em",
              paddingRight: "0.375em",
              paddingBottom: "0.1875em",
              paddingLeft: "0.375em",
            },
            code: {
              color: "rgb(var(--tw-prose-code))",
              fontWeight: "600",
              fontSize: "0.875em",
            },
            "code::before": {
              content: '"`"',
            },
            "code::after": {
              content: '"`"',
            },
            "a code": {
              color: "inherit",
            },
            "h1 code": {
              color: "inherit",
            },
            "h2 code": {
              color: "inherit",
            },
            "h3 code": {
              color: "inherit",
            },
            "h4 code": {
              color: "inherit",
            },
            "blockquote code": {
              color: "inherit",
            },
            "thead th code": {
              color: "inherit",
            },
            pre: {
              color: "rgb(var(--tw-prose-pre-code))",
              backgroundColor: "rgb(var(--tw-prose-pre-bg))",
              overflowX: "auto",
              fontWeight: "400",
              fontSize: "0.875em",
              lineHeight: "1.7142857",
              marginTop: "1.7142857em",
              marginBottom: "1.7142857em",
              borderRadius: "0.375rem",
              paddingTop: "0.8571429em",
              paddingRight: "1.1428571em",
              paddingBottom: "0.8571429em",
              paddingLeft: "1.1428571em",
            },
            "pre code": {
              backgroundColor: "transparent",
              borderWidth: "0",
              borderRadius: "0",
              padding: "0",
              fontWeight: "inherit",
              color: "inherit",
              fontSize: "inherit",
              fontFamily: "inherit",
              lineHeight: "inherit",
            },
            "pre code::before": {
              content: "none",
            },
            "pre code::after": {
              content: "none",
            },
            table: {
              width: "100%",
              tableLayout: "auto",
              textAlign: "left",
              marginTop: "2em",
              marginBottom: "2em",
              fontSize: "0.875em",
              lineHeight: "1.7142857",
            },
            thead: {
              borderBottomWidth: "1px",
              borderBottomColor: "rgb(var(--tw-prose-th-borders))",
            },
            "thead th": {
              color: "rgb(var(--tw-prose-headings))",
              fontWeight: "600",
              verticalAlign: "bottom",
              paddingRight: "0.5714286em",
              paddingBottom: "0.5714286em",
              paddingLeft: "0.5714286em",
            },
            "tbody tr": {
              borderBottomWidth: "1px",
              borderBottomColor: "rgb(var(--tw-prose-td-borders))",
            },
            "tbody tr:last-child": {
              borderBottomWidth: "0",
            },
            "tbody td": {
              verticalAlign: "baseline",
            },
            tfoot: {
              borderTopWidth: "1px",
              borderTopColor: "rgb(var(--tw-prose-th-borders))",
            },
            "tfoot td": {
              verticalAlign: "top",
            },
            "tbody td, tfoot td": {
              paddingTop: "0.5714286em",
              paddingRight: "0.5714286em",
              paddingBottom: "0.5714286em",
              paddingLeft: "0.5714286em",
            },
            "tbody td:first-child, tfoot td:first-child": {
              paddingLeft: "0",
            },
            "tbody td:last-child, tfoot td:last-child": {
              paddingRight: "0",
            },
            figure: {
              marginTop: "2em",
              marginBottom: "2em",
            },
            "figure > *": {
              marginTop: "0",
              marginBottom: "0",
            },
            figcaption: {
              color: "rgb(var(--tw-prose-captions))",
              fontSize: "0.875em",
              lineHeight: "1.4285714",
              marginTop: "0.8571429em",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
