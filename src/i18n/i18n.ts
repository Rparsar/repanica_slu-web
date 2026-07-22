import es from './es.json';
import en from './en.json';
import fr from './fr.json';
import de from './de.json';

export type Language = 'es' | 'en' | 'fr' | 'de';

const translations = {
  es,
  en,
  fr,
  de
};

/**
 * Obtiene una traducción por clave
 * @param key - Clave de traducción (ej: 'hero.titulo')
 * @param lang - Idioma (por defecto: 'es')
 * @returns Texto traducido o la clave si no existe
 */
export function t(key: string, lang: Language = 'es'): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback a español si no existe en el idioma actual
      value = translations.es;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Retorna la clave si no existe en ningún idioma
        }
      }
      return value;
    }
  }

  return typeof value === 'string' ? value : key;
}

/**
 * Obtiene todos los textos de un idioma
 * @param lang - Idioma
 * @returns Objeto con todas las traducciones
 */
export function getTranslations(lang: Language = 'es') {
  return translations[lang];
}

/**
 * Valida si un idioma es soportado
 * @param lang - Idioma a validar
 * @returns true si es válido
 */
export function isValidLanguage(lang: any): lang is Language {
  return ['es', 'en', 'fr', 'de'].includes(lang);
}

/**
 * Obtiene la lista de idiomas disponibles
 * @returns Array con información de idiomas
 */
export function getAvailableLanguages() {
  return [
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' }
  ];
}

/**
 * Obtiene el nombre del idioma en su propio idioma
 * @param lang - Código del idioma
 * @returns Nombre del idioma
 */
export function getLanguageName(lang: Language): string {
  const names: Record<Language, string> = {
    es: 'Español',
    en: 'English',
    fr: 'Français',
    de: 'Deutsch'
  };
  return names[lang] || lang;
}

/**
 * Obtiene el código de idioma de una URL
 * @param pathname - Ruta de la página
 * @returns Código de idioma
 */
export function getLanguageFromPath(pathname: string): Language {
  const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
  const lang = match?.[1];
  return isValidLanguage(lang) ? lang : 'es';
}

/**
 * Genera una URL con el idioma especificado
 * @param pathname - Ruta actual
 * @param lang - Idioma destino
 * @returns Nueva ruta con el idioma
 */
export function getPathWithLanguage(pathname: string, lang: Language): string {
  // Remover idioma actual si existe
  const pathWithoutLang = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
  
  // Si es la página de inicio, solo retornar el idioma
  if (pathWithoutLang === '/' || pathWithoutLang === '') {
    return lang === 'es' ? '/' : `/${lang}/`;
  }
  
  // Para otras páginas, agregar el idioma al inicio
  return lang === 'es' ? pathWithoutLang : `/${lang}${pathWithoutLang}`;
}
