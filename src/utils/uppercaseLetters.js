//função para deixar as primeiras lestras das palavras maiusculas
export function uppercaseLetters(text) {
    return text.toLowerCase().split(/\s+/).map(word => {
        if (word.length === 0) return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ')
} 