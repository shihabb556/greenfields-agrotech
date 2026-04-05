const fs = require('fs');
const https = require('https');
const path = require('path');

const imagesToDownload = [
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4hEHmvIfMl0EpdPGV9VKyyuO_O7pf47C-OTWGKzwTSmFItoZAU92svTXypg_sd8iDa1gWJzJ0BPuXO09EYE2Mu83tH-6UhJtgJhXqgD1o-TvWl8OrkAgIlqWK7c1G3ir2iO2TYhU_LA9L0L8vVJb8LxF-RbOxMIztIjFC9R5LDA5JVR3pwICWDpuhI00vHwca4FbbyJTnoOGJi71VFUw3fbZOGyvLUAqavUYxgQ4WdQlwVBa2VO0qqRB2J5JTqpsvntmF060a-Ydm", filename: "hero-bg.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPhH7qwdeMadydZjvnybJY0IMFbDQplDRZMyhf_WtU4vjd58UcknPxhSGCnLFNnwUDDMRPS3JHzROacy3npOpk7qdMyg7_vSwim_FwSzWS3hbeEhUFZ_n5qPSckEie_mCPCE3qqRmrcJqqqBpgkGPX2lum95FD1GvvjFOWgx0r4RkiHoRAEW24p9kzQ2eLYkUA68jC6enweDYKy-xk0h8xDEKJGM-QhVvchnQN2O2Rbs78kyBU7O7j1CP6RXuP6y5MfgZED-kq7dkp", filename: "about-heritage.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB812h3MQUg7mPOcUz5s6UPTmqlYzn7yoBNiDSZscKVU7VtV0xhb8uCuKxzKI3S9ok8BhrJkMAs1vjdFAW5FuysvaUBAwSkpU4YutN4mxNc22Vw8o5VbXiMzAS4BnIUV-RUQX6CUzuMBVYsFxay-diLGDzn37u_uamVR6JJJOZIe-Ifk2dTVgfyNaTq4JV6gtjk7J7fylwLtyEi2s6_-EHodl8xTYXkBbMzxRuHz0DIp99ZF08R9Z1Rs-kYu-qsRc45DDt4PhEpxlar", filename: "product-seeder.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP42vbLRppd0jNmDIHiHz8g3JZtPsb4LGIwIRkPIfuhfUfLN4cW7HKQM9ymEStsm1gHdBEYQCncRv9Fo8p6FjkNuZtZQYwv07D2lTiJd5E0ShMnXy_zZavbeXOaC-I3_lIegJb44YOCx6fq_CVHopggv38-g-REvjg2qU-R8GwCcAQUFmZGHEnMDK4VgjV4zvaf6T_sces0tPWWbDM4i0--pvdmsyMdPSpqiMXI_HWrqeJ76t0vGbz2CGAQ5mD_q-0TAJy52nEYz0k", filename: "product-seeds.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVxeoe2lLVRfgITrdqVImBvLJoQUzU4HCzC1g68D6EkAJJcJpa8F6nyJlbgMaiEMpq8lOq6be-hW8MYFgqlomtsDU8yGnyMforjJuIStk2IoIUru615Vu7-nG114pP2y47VqBGTaT09JWphvOxbbTVHfp1YCefSc2nEcEFUc83Zq9f5slw1rAmE7hjHwrwajiVxqUgXlA5g0gteqliKGGZ6FkYoLyp8cUAyfzAkzy_L3FfIBRlve9JcamJnwjADChdBmBeFFj106vJ", filename: "product-bioboost.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlaiCh7PbtcK2TzpNnm1XNQn8tbsGetRjk0E63ffQnEoFcYnOfAm9RO1Fw58j7sP66Y5nbvbHijjBaMpF-IRJxWR1H6_zX9EvxkLUrTYRypjUU5AF3MEinx_0ZlZiE_Tl2TZh6ONYxZ2uMzcYrZIiyZf1jYdP1klkghZ0hDcL5EXdh--AD-uucKz59bmKWLTfTiTTRL7NI2gC7Lo2DoFJiE6BtFHRU6JlluMmXgb-TG4C4ti9zZXLVIzNuKWubeVMuUWyATmXGnycQ", filename: "case-study-valley.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSocVB4ikcZpTQhSmv-M2XDpxvS1JStyYbjrXvqxPwDa5JsO8VKZT6Kfjf8CuNhrbTfCnsZmWCSeiIZYhGZZQb7t0X-_O65TVIRyaZlxoSLdLQqUqakTVsBzrUMqi9BO5JB6oVNoocBoA7pjkmk98OvBC-c5nzATsvcSEqL2JvROZhi63SWeZEZIwbnwQ-98WHOfzKgi_xuTKUIdnjGdn4N6Xn671vRKJ3G5Eynbfx2XDWfpv9bH1_yVnQGY6DNhWr2rXfIRQ5pybb", filename: "testimonial-miller.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0jTSLON0AbsWWHEaZanoNhMeBv-Z--lECiIZk1OTgeARLEr4c4eFzhquAxlDD9exQlJm5p02cZIFQqHxNgLchtTd0CZ-lBYdcvcSWScUIC6_N2EF859GVzALsqFEVNfiHr5eFKmiIF-S5bWHcFOgV_wrFMeR4qTUalZE29GUhde7hBJ8EwqZ5hYhWN8vgjqx4aZY_qOhbidlx4ZQn0A6e2DLkH_uVnwht5bm6-g4AbC5t_WnM-WOSUYt-VeTqN7wwTsZ8QWoxMmWL", filename: "blog-soil.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlmIGNxuRycGoiDXiXOVQebfxkEkiP-vh3H-LJ1Ad_jDbVaQ0ZXLnwK7SVVT6JQi7I8s7-xFcu-0EvrYufEhHxzPAOhI6c5bd3WDSevRqMz19rGY120QMVd5DMn3ydXnBoi0AOvnO1lmzMdHztBIUaobuh7JU1V4tXKOsj_jDCs5E7r6vjntW_rDZCzidQpolJNza_k9XCOBidfqRRbDMn3qK4irrsK084ihxSUkdSofcs38dG0WgTqMUsxnhb0pDxcQuU-uW0MPsQ", filename: "blog-seeds.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOmHY9yvqbJl92SfALU842WLFe5V1XdObW8zrhMPOgY0KAZ-NkzU5EjSCoyW3Pdj9xbmDs9cQT6E2Jn19iLDWMZPpzF2N3yHba17GA9T-7JQRtG9alJTlIHX6LrnFd-7hsFS5mGenSWpl199QwsOa3k2ZstWDt1xBHXuBYxhN5YIlud0cyqCpv219F1PQgolhg1rOy-Bo98w9dmYKxIjISqhQZOEEeAPdMGsRlAoY-8OZ4vPi9kWym6h6o44i-EGCM2RnKjz-fFFry", filename: "blog-organic.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmjNTeawwZuBywz7u2JqxUefLapwr0TH_zkkTaHAqBRdyYQTIobtKi6s3FnDNoTPiFt0Cz6aFeH_u-PZxN9u1KCIZZ8DdP2beOwHQcXkLtcKuiVzVcbi7P-d0au6TgITHBoyodRs6avw2zMNOJ8tkbMQRdh0ii1zhWsi3GubR8BJfpBh4Ks2EkA_jP1WFggCFS4yZ5MaqCc951oJBGotix9m82y6uuWlNEINaZt8pwGZ2voQTeC8chTH52IN4dTlnm5L1dIqk_xWs3", filename: "contact-map.jpg" },
];

const targetDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const filePath = path.join(targetDir, filename);
        const fileStream = fs.createWriteStream(filePath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.error(`Failed to download ${filename}: ${res.statusCode}`);
        reject(new Error(`Status Code: ${res.statusCode}`));
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

async function main() {
  for (const img of imagesToDownload) {
    try {
      await downloadImage(img.url, img.filename);
    } catch (e) {
      console.error(`Skipping ${img.filename}`);
    }
  }
}

main();
