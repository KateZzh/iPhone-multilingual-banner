const translations = {
    en: {
        'Get Unlimited <br>Access': 'Get Unlimited <br>Access',
        'Unlimited Art <br>Creation': 'Unlimited Art <br>Creation',
        'Exclusive <br>Styles': 'Exclusive <br>Styles',
        'Magic Avatars <br>With 20% Off': 'Magic Avatars <br>With 20% Off',
        'YEARLY ACCESS': 'YEARLY ACCESS',
        'BEST OFFER': 'BEST OFFER',
        'Just {{price}} per year': 'Just {{price}} per year',
        'WEEKLY ACCESS': 'WEEKLY ACCESS',
        '{{price}} <br>per week': '{{price}} <br>per week',
        'Terms of Use': 'Terms of Use',
        'Privacy Policy': 'Privacy Policy',
        Restore: 'Restore',
        Continue: 'Continue',
    },
    de: {
        'Get Unlimited <br>Access': 'Erhalten Sie unbegrenzten <br>Zugriff',
        'Unlimited Art <br>Creation': 'Unbegrenzte <br>Kunstschaffung',
        'Exclusive <br>Styles': 'Exklusive <br>Stile',
        'Magic Avatars <br>With 20% Off': '20 % Rabatt auf <br>KI-Avatare',
        'YEARLY ACCESS': 'JÄHRLICHER ZUGRIFF',
        'BEST OFFER': 'BESTES ANGEBOT',
        'Just {{price}} per year': 'Nur {{price}} pro Jahr',
        'WEEKLY ACCESS': 'WÖCHENTLICHER ZUGRIFF',
        '{{price}} <br>per week': '{{price}} <br>pro Woche',
        'Terms of Use': 'Nutzungsbedingungen',
        'Privacy Policy': 'Datenschutzrichtlinie',
        Restore: 'Wiederherstellen',
        Continue: 'Weiter',
    },
    es: {
        'Get Unlimited <br>Access': 'Obtén acceso <br>ilimitado',
        'Unlimited Art <br>Creation': 'Ilimitada creación <br>de arte',
        'Exclusive <br>Styles': 'Estilos <br>exclusivos',
        'Magic Avatars <br>With 20% Off': '20 % de descuento en <br>avatares de IA',
        'YEARLY ACCESS': 'ACCESO ANUAL',
        'BEST OFFER': 'MEJOR OFERTA',
        'Just {{price}} per year': 'Solo {{price}} por año',
        'WEEKLY ACCESS': 'ACCESO SEMANAL',
        '{{price}} <br>per week': '{{price}} <br>por semana',
        'Terms of Use': 'Términos de uso',
        'Privacy Policy': 'Política de privacidad',
        Restore: 'Restaurar',
        Continue: 'Continuar',
    },
    fr: {
        'Get Unlimited <br>Access': 'Obtenez un accès <br>illimité',
        'Unlimited Art <br>Creation': 'Création artistique <br>illimitée',
        'Exclusive <br>Styles': 'Styles <br>exclusifs',
        'Magic Avatars <br>With 20% Off': '20&nbsp;% de réduction <br>sur les avatars IA',
        'YEARLY ACCESS': 'ACCÈS ANNUEL',
        'BEST OFFER': 'MEILLEURE OFFRE',
        'Just {{price}} per year': 'Seulement {{price}} par an',
        'WEEKLY ACCESS': 'ACCÈS HEBDOMADAIRE',
        '{{price}} <br>per week': '{{price}} <br>par semaine',
        'Terms of Use': 'Conditions d’utilisation',
        'Privacy Policy': 'Politique de confidentialité',
        Restore: 'Restaurer',
        Continue: 'Continuer',
    },
    ja: {
        'Get Unlimited <br>Access': '無制限アクセス<br>を入手',
        'Unlimited Art <br>Creation': 'アート作品を<br>無制限に創造',
        'Exclusive <br>Styles': '特別な<br>スタイル',
        'Magic Avatars <br>With 20% Off': 'AIアバターが<br>20%オフ',
        'YEARLY ACCESS': '年間アクセス',
        'BEST OFFER': 'ベストオファー',
        'Just {{price}} per year': 'わずか{{price}}/年',
        'WEEKLY ACCESS': '週ごとのアクセス',
        '{{price}} <br>per week': '{{price}}/週<br>',
        'Terms of Use': '利用規約',
        'Privacy Policy': 'プライバシーポリシー',
        Restore: '復元する',
        Continue: '続行する',
    },
    pt: {
        'Get Unlimited <br>Access': 'Obtenha Acesso <br>Ilimitado',
        'Unlimited Art <br>Creation': 'Criação de Arte <br>Ilimitada',
        'Exclusive <br>Styles': 'Estilos <br>Exclusivos',
        'Magic Avatars <br>With 20% Off': '20% de Desconto em <br>Avatares de IA',
        'YEARLY ACCESS': 'ACESSO ANUAL',
        'BEST OFFER': 'MELHOR OFERTA',
        'Just {{price}} per year': 'Apenas {{price}} por ano',
        'WEEKLY ACCESS': 'ACESSO SEMANAL',
        '{{price}} <br>per week': '{{price}} <br>por semana',
        'Terms of Use': 'Termos de Uso',
        'Privacy Policy': 'Política de Privacidade',
        Restore: 'Restaurar',
        Continue: 'Continuar',
    },
};

function getLanguageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get('lang');
}

function getSystemLanguage() {
    const systemLang = navigator.language || navigator.userLanguage;

    return systemLang.split('-')[0].toLowerCase();
}

function determineLanguage() {
    const urlLang = getLanguageFromURL();

    if (urlLang && translations[urlLang]) {
        return urlLang;
    }

    const systemLang = getSystemLanguage();

    if (translations[systemLang]) {
        return systemLang;
    }

    return 'en';
}

function t(key, variables = null) {
    const currentLang = document.documentElement.lang || 'en';
    let translation = translations[currentLang][key] || translations.en[key] || key;

    if (variables) {
        Object.keys(variables).forEach((variable) => {
            translation = translation.replace(new RegExp(`{{${variable}}}`, 'g'), variables[variable]);
        });
    }

    return translation;
}

function setText(id, value, useHTML = false) {
    const el = document.getElementById(id);

    if (!el) return;

    useHTML ? (el.innerHTML = value) : (el.textContent = value);
}

function setLanguage(lang) {
    document.documentElement.lang = lang;

    setText('main-title', t('Get Unlimited <br>Access'), true);
    setText('main-advantage-desc1', t('Unlimited Art <br>Creation'), true);
    setText('main-advantage-desc2', t('Exclusive <br>Styles'), true);
    setText('main-advantage-desc3', t('Magic Avatars <br>With 20% Off'), true);
    setText('item-badge', t('BEST OFFER'));
    setText('item-title1', t('YEARLY ACCESS'));
    setText('item-title2', t('WEEKLY ACCESS'));
    setText('item__desc', t('Just {{price}} per year', { price: '$39.99' }), true);
    setText('item-price1', t('{{price}} <br>per week', { price: '$0.48' }), true);
    setText('item-price2', t('{{price}} <br>per week', { price: '$6.99' }), true);
    setText('continue-btn', t('Continue'));
    setText('terms-link', t('Terms of Use'));
    setText('privacy-link', t('Privacy Policy'));
    setText('restore-link', t('Restore'));

    document.body.className = `lang-${lang}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = determineLanguage();
    setLanguage(lang);
});
