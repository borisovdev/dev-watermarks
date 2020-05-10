export default class {

    constructor(place = "bottom", link = "#",  name = "разработчик") {
        place === "top" ? document.addEventListener("DOMContentLoaded", () => document.body.prepend(this.waterBanner(name))) : null;
        place === "bottom" ? document.addEventListener("DOMContentLoaded", () => document.body.append(this.waterLink(link, name))) : null;
    }

    waterLink(link, name) {
        let elem = document.createElement("a");
        this.linkStyles(elem, link, name);

        return elem;
    }

    waterBanner(name) {
        let elem = document.createElement("div");
        this.bannerStyles(elem, name);

        return elem;
    }

    linkStyles(el, link, name) {
        el.href = link;
        el.innerText = "Проект разработал: " + name;
        el.style.position = 'absolute';
        el.style.right = '15px';
        el.style.bottom = '15px';
        el.style.color = '#A3398F';

        return el;
    }

    bannerStyles(el, text) {
        el.innerText = "Проект разработал: " + text;
        el.style.paddingTop = '100px';
        el.style.paddingBottom = '50px';
        el.style.backgroundColor = 'red';
        el.style.fontSize = '48px';
        el.style.fontWeight = 'bold';
        el.style.textAlign = 'center';
        el.style.color = 'white';

        return el;
    }

}
