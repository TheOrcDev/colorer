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
     * Getting color palette from an image
     */
    Palette() {
        const self = this;
        Vibrant.from(this.img).getPalette(function(err, palette) {

            Object.entries(palette).forEach(function(color) {

                // type from vibrant - Vibrant, Muted etc
                const type = color[0];
                const rgb = color[1];

                
                if (palette.hasOwnProperty(type) && palette[type]) {
                    
                    const title = document.getElementById('title');
                    
                    switch (type) {
        
                      case 'LightMuted':
                        title.style.color = $c.complement(palette[type].getHex());
                        break;

                      case 'DarkMuted':
                        title.style.color = palette['Vibrant'].getHex();

                      default:
                        title.style.filter = "grayscale(40%)";
                        title.style.filter = "brightness(120%)";
                        title.style.filter = "contrast(200%)";

                    }

                    self.CreatePalette(palette[type].getHex(), type);
                }

            });

        });
    }

    /**
     * Palette 
     * Returning entire palette with its complementary colors
     */
    CreatePalette(hex, type) {
        const div = document.getElementById('colors');
        const newDiv = document.createElement("newDiv");

        newDiv.style.width = "100px";
        newDiv.style.height = "100px";
        newDiv.style.padding = "15px";
        newDiv.style.backgroundColor = hex;
        newDiv.style.color = $c.complement(hex);
        newDiv.innerHTML = type + ' - ' + hex;
        div.appendChild(newDiv);

    }

}