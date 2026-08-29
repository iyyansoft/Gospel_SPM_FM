import { Jimp } from 'jimp';

async function split() {
  try {
    const image = await Jimp.read('public/channels_sprite.png');
    console.log('Loaded image:', image.width, 'x', image.height);

    // Let's crop the three logos
    // The width is 870, height is 587.
    // Each row is 587/3 = ~195px high.
    // The logo circle is on the left.
    // Let's estimate: the circular logo starts near x=120 and goes to x=320 (width ~200)
    // Let's crop a square area for each row:
    // Row 1: x=120, y=5, w=185, h=185
    // Row 2: x=120, y=198, w=185, h=185
    // Row 3: x=120, y=392, w=185, h=185
    
    // We can do a quick crop and save:
    const logo1 = image.clone().crop({ x: 120, y: 5, w: 185, h: 185 });
    await logo1.write('public/logo_prayer.png');
    console.log('Saved logo_prayer.png');

    const logo2 = image.clone().crop({ x: 120, y: 198, w: 185, h: 185 });
    await logo2.write('public/logo_music.png');
    console.log('Saved logo_music.png');

    const logo3 = image.clone().crop({ x: 120, y: 392, w: 185, h: 185 });
    await logo3.write('public/logo_praise.png');
    console.log('Saved logo_praise.png');
    
  } catch (err) {
    console.error('Error splitting logos:', err);
  }
}

split();
