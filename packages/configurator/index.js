/**
 * Description: Converts process.env variables to Number, Object, Array, Boolean
 * @class Configurator
 */
class Configurator {
    constructor($variables) {
        this.cache = {};
        for (const $key in $variables) {
            let $var = $variables[$key];

            switch (true) {
                case ($var.toLowerCase() === 'false'
                    || $var.toLowerCase() === 'off'
                    || $var.toLowerCase() === 'no'
                ):
                    $var = false;
                    break;
                case ($var.toLowerCase() === 'true'
                    || $var.toLowerCase() === 'on'
                    || $var.toLowerCase() === 'yes'
                ):
                    $var = true;
                    break;
                case ($var.includes('{') && $var.includes('}')):
                    try {
                        $var = JSON.parse($var);
                    } catch (error) {
                        $var = 'PARSING_ERROR';
                    }
                    break;
                case ($var.includes('[') && $var.includes(']')):
                    try {
                        $var = Array.from(JSON.parse($var));
                    } catch (error) {
                        $var = 'PARSING_ERROR';
                    }
                    break;
                case (!isNaN($var)):
                    $var = Number($var);
                    break;
            }
            if ($var !== 'PARSING_ERROR') this.cache[$key] = $var;
        }
    }

    /**
     * Description: Takes name of a variable and returns the value
     * @param {string} $name
     * @returns {*}
     */
    GET($name) {
        if (this.cache.hasOwnProperty($name)) {
            return this.cache[$name]
        } else {
            console.log('Unresovable variable: ', $name)
        }
    }
}

module.exports = Configurator;