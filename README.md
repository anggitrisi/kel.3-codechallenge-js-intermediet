# kel.3-codechallenge-js-intermediet.
## Expected Result

![expected-result](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/code-challenge-asynchronous-05.gif)

## Specs
Buatlah aplikasi website sesuai desain dan contoh data di atas dimana kita akan mengambil data dari 2 External API yaitu:
- [jsonplaceholder](https://jsonplaceholder.typicode.com/) untuk mengambil data *post*, *author*, dan *comment*
- [unsplash](https://source.unsplash.com/) untuk menggambil *random picture* yang akan kita gunakan sebagai thumbnail baik itu sebuah *post* ataupun *photo profile*

Terdapat beberapa aturan yang harus kalian patuhi dalam pengerjaan tugas kali ini yaitu:
1. semua fungsi yang akan bertugas untuk mengambil data dari *External API* harus berada didalam file `helpers.js`
2. kamu dilarang untuk mengahapus atau merubah fungsi yang sudah tersedia secara lengkap
3. kamu hanya diperbolehkan untuk mengubah baris kode apabila
4. baca dokumentasi resmi dari tiap-tiap *External API* yang akan kita gunakan

> Gunakan template yang sudah disediakan pada folder `template`. Kalian diminta untuk tidak melakukan perubahan pada variable yang telah tersedia.

### 01 - Home Page

![skilvul](
https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/code-challenge-asynchronous-02.png
)

Halaman utama berada pada file `index.html` dan `index.js`, kalian diminta untuk menampilkan `16 post` pertama yang dapat kita ambil melalui `jsonplaceholder`. Apabila kita menekan salah satu `post card` maka kita akan berpindah kehalaman `detail post`, berikut merupakan langkah-langkah pengerjaannya:
- perbaiki tata cara pemanggilan Javascript yang kita gunakan pada file `index.html`, mengingat bahwa kita akan menggunakan `asynchronous` dan `module`
- `renderPosts` merupakan fungsi yang akan menampilkan seluruh postingan yang kita ambil melalui `jsonplaceholder API` 
- buatlah sebuah fungsi dengan nama `getPosts` didalam file `helpers.js` dimana ia bertugas untuk mengambil seluruh `post` yang terdapat pada `jsonplaceholder API`
- setelah semua data berhasil diambil saat-nya kita untuk menampilkan data tersebut kedalam `HTML` menggunakan fungsi `createPostElement`, fungsi tersebut akan membuat sebuah `DOM Element` dan nanti-nya akan kita `"tempelkan"` pada `element` dengan `id="daftar-berita"`
  - perbaiki fungsi `createPostElement` terlebih dahulu sebelum kita menggunakannya
  - `"pasang"` semua `data` yang sudah kita kirimkan melalui parameter kedalam masing-masing `element`
    - `cardTitle` => judul dari post tersebut
    - `cardImg` => gambar yang sudah kita ambil melalui `Unsplash API`
    - `cardBtn` => dengan format link sebagai berikut `/post.html?post_id=$POST_ID`, yang mana hal ini akan mengarahkan kita kepada halaman selanjutnya yaitu `post.html`
- dikarnakan `jsonplaceholder` memiliki begitu banyak data, maka pada kesempatan kali ini kita hanya akan menggunakan 16 data saja

### 02 - Detail Post Page

![skilvul](
https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/code-challenge-asynchronous-03.png
)

Halaman `detail post` berada pada file `post.html` dan `post.js`, kalian diminta untuk menampilkan `detail post` dari suatu kartu yang kita tekan pada halaman sebelumnya. Pada halaman ini kita akan menampilkan detail dari suatu `post` beserta dengan `author` dan `comments`, untuk mendapatkan `detail post` kita dapat menggambil `post_id` yang berada didalam `url` tepatnya `query parameter`, berikut merupakan langkah-langkah pengerjaannya:
- perbaiki tata cara pemanggilan Javascript yang kita gunakan pada file `post.html`, mengingat bahwa kita akan menggunakan `asynchronous` dan `module`
- `renderPost` merupakan fungsi yang akan menampilkan *detail post* beserta dengan *author* dan *comment* yang kita ambil melalui `jsonplaceholder API` 
- buatlah sebuah fungsi dengan nama `getPost` didalam file `helpers.js` dimana ia bertugas untuk mengambil sebuah `post` berdasarkan `post_id` yang ada didalam parameter, terdapat 2 kondisi pada saat kita mengambil data tersebut yaitu:
  - apabila data berhasil didapatkan, maka kita perlu menggambil beberapa data lainnya yaitu:
    - `randomPic` => gambar acak yang akan kita jadikan sebagai thumbnail
    - `randomPicProfile` => gambar acak yang akan kita jadikan sebagai *photo profile* dari sang *author*
    - `postComments` => daftar komentar yang terdapat didalam sebuah `post`, untuk mengambil data tersebut kamu diminta untuk menuliskan sebuah fungsi `getPostComments` didalam file `helpers.js`
    - `author` => sang penulis dari `post` tersebut, untuk mengambil data tersebut kamu diminta untuk menuliskan sebuah fungsi `getAuthor` didalam file `helpers.js`
  - apabila kita gagal mendapatkan data tersebut maka kita akan menampilkan pesan `"Not Found"`, dengan cara menghilangkan `class="d-none"` pada suatu `element` yang memiliki `id="not-found"`

### 03 - Author Posts Page

![skilvul](
https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/code-challenge-asynchronous-04.png
)

Halaman `author posts` berada pada file `author.html` dan `author.js`, kalian diminta untuk menampilkan seluruh `post` yang ditelah ditulis oleh sang `author N`, untuk mendapatkan seluruh `posts` yang telah ditulis oleh salah satu `author` kita dapat menggunakan `user_id` sebagai *identifier* untuk mengambil `author` melalui `jsonplaceholder API`, berikut merupakan langkah-langkah pengerjaannya:
- perbaiki tata cara pemanggilan Javascript yang kita gunakan pada file `author.html`, mengingat bahwa kita akan menggunakan `asynchronous` dan `module`
- `renderPosts` merupakan fungsi yang akan menampilkan seluruh `post` yang telah ditulis oleh sang `author`, untuk dapat mengambil seuluruh `post` yang dimiliki oleh `author` kita perlu untuk mendapatkan `author` tersebut terlebih dahulu dengan cara:
- ambil `author_id` yang berada didalam `query` pada `url`
- ambil data `author` menggunakan fungsi yang sudah kamu buat pada page ke-02 yaitu `getAuthor` yang terdapat pada file `helpers.js`, terdapat 2 kondisi disaat kita mengambil data `author` tersebut yaitu:
  - apabila data ditemukan, maka kita perlu mengmbil data `posts` yang dimiliki user dengan cara:
    - buatlah sebuah fungsi dengan nama `getPostsByAuthor` didalam file `helpers.js` dimana ia bertugas untuk mengambil sebuah `post` berdasarkan `post_id` yang ada didalam parameter, terdapat 2 kondisi pada saat kita mengambil data tersebut yaitu:
      - apabila kita berhasil mengambil seluruh `post` yang dibuat oleh `author`, maka kita akan langsung menampilkannya menggunakan fungsi `createPostElement`
      - apabila data tidak ditemukan atau `author` tidak memiliki `post`, maka kita akan menampilkan `Empty Post`
