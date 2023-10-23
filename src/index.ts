import plugin from "tailwindcss/plugin";

export interface Theme {
    name: string;
    selector: string;
}

export interface Options {
    themes: Theme[];
}

/**
 * A tailwindcss plugin to make custom themes like dark mode, autumn theme, xmas theme, etc
 * @param {Options} options - A list of custom themes with syntax `key: name`
 */
export const xtheme = (options: Options) => {
    const themes = options.themes;

    return plugin(({ addVariant }) => {
        console.log("⚡ Thank you for using xtheme!");
        for (let theme of themes) {
            try {
                addVariant(theme.selector, `:is(.${theme.selector} &)`);
                console.log(
                    "\x1b[1m\x1b[32m%s\x1b[0m",
                    `🎉 Added theme ${theme.name}`,
                );
            } catch (error) {
                console.log(
                    "\x1b[1m\x1b[31m%s\x1b[0m",
                    `❌ Error while adding theme ${theme.name}`,
                );
            }
        }
    });
};

export const Toggle = (document: Document, name: string, themes: Theme[]) => {
    const html = document.documentElement;

    themes.forEach((theme) => {
        html.classList.remove(theme.name);
    });

    html.classList.add(name);
};
