/**
 * Colorer
 *
 * For image color manipulation
 * 
 */
 class Colorer {

    constructor(img) {
        this.img = img;

        document.getElementById('palette-img').src = this.img;
    }

    /**
     * Palette 
     *
     * Getting color palette from an image, and returning 
     * entire palette with its complementary colors
     */
    Palette() {
        Vibrant.from(this.img).getPalette(function(err, palette) {

            let div = document.getElementById('colors');
            let title = document.getElementById('title');

            Object.entries(palette).forEach(function(color) {

                // type from vibrant - vibrant, muted etc
                const type  = color[0];
                const rgb   = color[1];

                if (palette.hasOwnProperty(type) && palette[type]) {

                    if (type == 'Vibrant') {
                        title.style.color = $c.complement(palette[type].getHex());

                    }

                    let newDiv = document.createElement("newDiv");

                    newDiv.style.width = "100px";
                    newDiv.style.height = "100px";
                    newDiv.style.padding = "15px";
                    newDiv.style.backgroundColor = palette[type].getHex();
                    newDiv.style.color = $c.complement(palette[type].getHex());
                    newDiv.innerHTML = type + ' - ' + palette[type].getHex();
                    div.appendChild(newDiv);

                }
            });

        });
    }

}