require('dotenv').config();

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
                case ($var.toLowerCase() === 'false' || $var.toLowerCase() === 'off'):
                    $var = false;
                    break;
                case ($var.toLowerCase() === 'true' || $var.toLowerCase() === 'on'):
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
            if ($var !== 'PARSING_ERROR') {
                this.cache[$key] = $var;
            }
        }
    }

    get($name) {
        if (this.cache.hasOwnProperty($name)) {
            return this.cache[$name]
        } else {
            console.log('Unresovable variable: ', $name)
        }
    }
}

module.exports = Configurator;