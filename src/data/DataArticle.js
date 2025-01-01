// eslint-disable-next-line no-unused-vars
import React from 'react'

const createSlug = (title) => {
  return title
    .toLowerCase() 
    .replace(/\s+/g, '-')  
    .replace(/[^\w-]+/g, '')  
    .replace(/--+/g, '-')   
    .trim(); 
};

const DataArticle = [
  {
    id: 1,
    title: createSlug('Kemenangan Luar Biasa PB Bhinneka'),
    date: 'Agustus 2024',
    author: 'Fanjaaa_',
    image: 'juara1LvlA',
    content: ['Keberhasilan luar biasa yang diraih oleh tim PB Bhinneka di level A, Cup 1 PB WBR 02, telah menjadi perbincangan hangat di kalangan pecinta bulu tangkis. Tim yang sebelumnya dikenal dengan semangat juang yang tinggi dan komitmen terhadap perkembangan bulu tangkis, akhirnya berhasil menunjukkan kualitas dan daya saing mereka di turnamen ini. PB Bhinneka, yang dikenal sebagai salah satu klub dengan pemain berbakat dan pelatih berpengalaman, berhasil menorehkan prestasi gemilang yang tak terlupakan.',
    'Dalam kompetisi yang sangat ketat ini, PB Bhinneka berhasil mengalahkan lawan-lawan tangguh dan menunjukkan dominasi di berbagai pertandingan. Kemenangan ini tak lepas dari kerja keras para atlet yang berlatih tanpa henti serta dukungan penuh dari seluruh tim. Para pemain PB Bhinneka tampil dengan semangat yang membara, menunjukkan performa maksimal di setiap babak. Strategi yang diterapkan oleh tim pelatih juga terbukti efektif, membimbing para atlet untuk tampil cemerlang dan percaya diri.',
    'Kemenangan ini bukan hanya menjadi kebanggaan bagi PB Bhinneka, tetapi juga membawa dampak positif bagi perkembangan bulu tangkis di level lokal. Prestasi ini memberikan motivasi kepada generasi muda untuk terus berlatih dan berprestasi. Selain itu, keberhasilan ini menunjukkan bahwa kerja tim yang solid dan dedikasi yang tinggi adalah kunci utama meraih kesuksesan. PB Bhinneka kini menjadi inspirasi bagi klub-klub lainnya untuk berusaha keras demi meraih kemenangan di ajang yang lebih tinggi.', 
    'Dengan kemenangan ini, PB Bhinneka tidak hanya mengukuhkan posisi mereka di peta bulu tangkis nasional, tetapi juga membuktikan bahwa mereka mampu bersaing di level A. Kesuksesan ini menjadi langkah awal yang berharga untuk menghadapi tantangan-tantangan di masa depan. Tim ini kini berada di jalur yang tepat untuk meraih prestasi lebih tinggi dan mengharumkan nama klub mereka di kancah bulu tangkis yang lebih luas. PB Bhinneka telah membuktikan bahwa mereka bukan hanya tim biasa, tetapi sebuah kekuatan yang patut diperhitungkan.' ],
  },
  {
    id: 2,
    title: createSlug('Penampilan Hebat PB Legend Raih Juara 2'),
    date: 'Agustus 2024',
    author: 'Fanjaaa_',
    image: 'juara2LvlA',
    content: ['PB Legend kembali menunjukkan kualitas mereka dengan penampilan luar biasa di Cup 1 PB WBR 02. Meskipun hanya meraih juara 2, prestasi ini mencerminkan semangat juang dan dedikasi tinggi yang dimiliki oleh tim tersebut. PB Legend, yang telah lama berdiri sebagai salah satu klub bulu tangkis ternama, tampil dengan kekuatan penuh dan tak pernah menyerah dalam setiap pertandingan.',
    'Dalam kompetisi yang sangat ketat ini, PB Legend menunjukkan permainan yang luar biasa. Para atlet tampil dengan tekad yang kuat dan kepercayaan diri yang tinggi. Meskipun menghadapi tim-tim tangguh lainnya, PB Legend berhasil memberikan perlawanan sengit dan menunjukkan performa yang mengesankan di setiap laga. Strategi yang diterapkan oleh tim pelatih terbukti efektif, membawa para pemain ke level permainan yang lebih tinggi.',
    'Kemenangan ini menjadi bukti bahwa PB Legend masih memiliki kekuatan dan kualitas yang patut diperhitungkan. Meskipun hanya meraih juara 2, pencapaian ini memberi motivasi besar bagi para pemain dan seluruh tim. PB Legend terus menunjukkan komitmen untuk mengembangkan bakat-bakat muda dan menciptakan atlet bulu tangkis berprestasi di masa depan.', 
    'Juara 2 di Cup 1 PB WBR 02 adalah langkah penting bagi PB Legend dalam perjalanan mereka untuk meraih gelar-gelar lebih tinggi. Prestasi ini tak hanya membanggakan klub, tetapi juga berkontribusi pada kemajuan bulu tangkis lokal. PB Legend tetap menjadi salah satu klub bulu tangkis yang berpotensi besar dan terus menjadi inspirasi bagi generasi muda.'],
  },
  {
    id: 3,
    title: createSlug('PB Sepakat Raih Juara 1 dengan Performa Luar Biasa'),
    date: 'Agustus 2024',
    author: 'Fanjaaa_',
    image: 'juara1LvlB',
    content: ['PB Sepakat telah berhasil meraih gelar juara 1 di Cup 1 PB WBR 02 dengan penampilan yang luar biasa. Tim ini membuktikan bahwa kerja keras, disiplin, dan semangat juang yang tinggi adalah kunci kesuksesan. PB Sepakat, yang selama ini dikenal sebagai klub dengan potensi besar dan pemain-pemain berbakat, akhirnya mampu menunjukkan performa terbaik mereka di turnamen ini.',
    'Dalam setiap pertandingan, para atlet PB Sepakat tampil dengan keyakinan dan fokus yang luar biasa. Mereka mampu mengatasi tantangan dari tim-tim kuat lainnya dan menunjukkan keunggulan di berbagai sektor. Strategi yang diterapkan oleh tim pelatih sangat efektif, membimbing para pemain untuk tampil maksimal di setiap pertandingan. Keberhasilan ini tak lepas dari kerja keras para atlet yang terus berlatih dan memperbaiki kekuatan serta teknik mereka.',
    'Kemenangan ini tak hanya membawa kebanggaan bagi PB Sepakat, tetapi juga memotivasi klub-klub lainnya untuk terus berjuang dan berprestasi. PB Sepakat kini semakin kokoh di peta bulu tangkis lokal dan menjadi inspirasi bagi generasi muda untuk mengejar mimpi mereka dalam olahraga ini. Prestasi ini juga menunjukkan bahwa ketekunan dan kerjasama tim yang solid sangat berperan dalam meraih hasil gemilang.', 
    'Dengan kemenangan ini, PB Sepakat semakin menegaskan diri sebagai salah satu klub bulu tangkis yang patut diperhitungkan di level A. Prestasi ini menjadi landasan kuat untuk menghadapi turnamen-turnamen selanjutnya dan meraih kesuksesan yang lebih besar di masa depan. PB Sepakat kini siap untuk terus berkompetisi dan membuktikan bahwa mereka adalah kekuatan besar dalam dunia bulu tangkis.' ],
  },
  {
    id: 4,
    title: createSlug('PB Bro Gang Tampil Hebat Raih Juara 2 Level B'),
    date: 'Agustus 2024',
    author: 'Fanjaaa_',
    image: 'juara2LvlB',
    content: ['PB Bro Gang kembali menunjukkan performa yang luar biasa di ajang Cup 1 PB WBR 02. Meskipun hanya meraih juara 2, pencapaian ini menjadi bukti bahwa tim ini memiliki potensi besar dan semangat juang yang tak terbendung. PB Bro Gang, yang dikenal dengan kerja keras dan dedikasi tinggi, tampil dengan performa terbaik dan memberikan perlawanan sengit di setiap pertandingan.',
    'Para atlet PB Bro Gang menunjukkan permainan yang penuh dengan semangat dan kepercayaan diri. Mereka tampil dengan disiplin yang tinggi, menghadapi lawan-lawan tangguh dengan tekad kuat untuk meraih hasil terbaik. Strategi yang diterapkan oleh tim pelatih terbukti efektif, membawa para pemain ke level permainan yang lebih tinggi dan menunjukkan performa yang konsisten di seluruh babak.',
    'Meskipun hanya berada di posisi kedua, prestasi ini memberikan motivasi besar bagi para atlet dan seluruh tim. PB Bro Gang telah membuktikan bahwa kerja tim yang solid dan semangat untuk terus berkembang sangat penting dalam meraih kesuksesan. Juara 2 di Level B menunjukkan bahwa mereka mampu bersaing dengan tim-tim lain dan terus berupaya untuk meningkatkan kemampuan.', 
    'Dengan keberhasilan ini, PB Bro Gang semakin memperkuat posisi mereka di kancah bulu tangkis lokal. Pencapaian ini memberikan dampak positif bagi perkembangan bulu tangkis di wilayahnya dan menjadi inspirasi bagi klub-klub lainnya untuk terus berjuang. PB Bro Gang kini berada di jalur yang tepat untuk meraih prestasi yang lebih besar di masa depan.' ],
  },
  {
    id: 5,
    title: createSlug('PB Lembang Dominasi Level C Raih Juara 1'),
    date: 'Agustus 2024',
    author: 'Fanjaaa_',
    image: 'juara1LvlC',
    content: ['PB Lembang telah membuktikan dominasi mereka di Level C dengan meraih gelar juara 1 di Cup 1 PB WBR 02. Tim ini tampil dengan performa luar biasa, menunjukkan keunggulan di berbagai sektor dan mengalahkan lawan-lawan tangguh dengan percaya diri. PB Lembang, yang dikenal dengan kekompakan tim dan semangat juang tinggi, akhirnya meraih hasil yang sangat membanggakan di ajang ini.',
    'Para atlet PB Lembang tampil dengan konsistensi dan determinasi yang luar biasa. Mereka menunjukkan ketangguhan dalam menghadapi pertandingan-pertandingan berat, baik dari segi teknik maupun mental. Tim pelatih yang berpengalaman pun berperan besar dalam membimbing para pemain untuk terus meningkatkan kemampuan mereka. Keberhasilan ini adalah hasil dari kerja keras, dedikasi, dan semangat tim yang terus membara.',
    'Kemenangan ini bukan hanya membawa kebanggaan bagi PB Lembang, tetapi juga menjadi inspirasi bagi klub-klub lainnya yang ingin mencapai kesuksesan di dunia bulu tangkis. PB Lembang kini semakin kokoh di peta bulu tangkis lokal dan menunjukkan bahwa mereka adalah kekuatan yang patut diperhitungkan. Juara 1 di Level C ini menjadi bukti bahwa kerja tim yang solid dan komitmen tinggi sangat penting dalam meraih prestasi.', 
    'Dengan kemenangan ini, PB Lembang tidak hanya memperkuat posisi mereka di kancah bulu tangkis lokal, tetapi juga membuka jalan untuk meraih prestasi yang lebih besar di masa depan. Tim ini telah membuktikan bahwa mereka memiliki potensi besar dan mampu bersaing di level yang lebih tinggi. PB Lembang siap menghadapi tantangan-tantangan berikutnya dan terus berjuang untuk mengharumkan nama klub mereka di ajang yang lebih bergengsi.' ],
  },
  {
    id: 6,
    title: createSlug('PB 21 Berhasil Raih Juara 2 Level C'),
    date: 'Agustus 2024',
    author: 'Fanjaaa_',
    image: 'juara2LvlC',
    content: ['PB 21 telah menunjukkan performa yang luar biasa di ajang Cup 1 PB WBR 02, berhasil meraih juara 2 di Level C. Meskipun hanya berada di posisi kedua, pencapaian ini menunjukkan semangat juang dan kerja keras yang tak terhenti. PB 21, yang dikenal dengan komitmen terhadap perkembangan bulu tangkis, tampil dengan performa solid dan konsisten di setiap pertandingan.',
    'Para atlet PB 21 menunjukkan ketangguhan dan disiplin tinggi dalam menghadapi berbagai tantangan. Mereka berjuang dengan penuh semangat dan tidak pernah menyerah, menunjukkan kemampuan yang matang dan percaya diri. Tim pelatih berperan penting dalam membimbing para pemain untuk tampil optimal, menghadapi lawan-lawannya dengan taktis dan efisien.',
    'Kemenangan ini tak hanya membawa kebanggaan bagi PB 21, tetapi juga memberikan motivasi besar bagi klub-klub lainnya untuk terus berkembang. Prestasi ini menunjukkan bahwa dengan kerja tim yang solid dan dedikasi tinggi, setiap tantangan dapat diatasi. PB 21 semakin memperkuat posisi mereka di kancah bulu tangkis lokal dan menjadi inspirasi bagi generasi muda untuk terus berprestasi.', 
    'Dengan keberhasilan ini, PB 21 berada di jalur yang tepat untuk meraih prestasi yang lebih tinggi di masa depan. Juara 2 di Level C menunjukkan bahwa mereka memiliki potensi besar dan mampu bersaing dengan klub-klub lainnya. PB 21 siap menghadapi turnamen-turnamen berikutnya dan terus berupaya mengukir prestasi gemilang di dunia bulu tangkis.' ],
  },
  {
    id: 7,
    title: createSlug('Perayaan Kemenangan sebagai Simbol Pencapaian Luar Biasa'),
    date: 'Agustus 2024',
    author: 'Fanjaaa_',
    image: 'momentCup1',
    content: ['Perayaan kemenangan tidak hanya menjadi momen meriah, tetapi juga simbol dari pencapaian luar biasa yang diraih oleh suatu tim atau individu. Ketika sebuah tim bulu tangkis berhasil meraih hasil yang membanggakan di ajang seperti Cup 1 PB WBR 02, perayaan kemenangan menjadi cerminan dari kerja keras, dedikasi, dan semangat juang yang tak kenal lelah.',
    'Kemenangan yang diraih oleh tim di berbagai level menunjukkan bahwa mereka telah melewati proses panjang yang penuh dengan tantangan. Perayaan kemenangan ini adalah refleksi dari perjuangan yang tak kenal lelah, latihan yang konsisten, dan semangat untuk meraih yang terbaik. Setiap piala, medali, dan penghargaan yang diraih menjadi bukti nyata dari dedikasi para atlet dan tim yang berkomitmen untuk menggapai prestasi.',
    'Selain itu, perayaan kemenangan juga memberikan dampak positif bagi tim dan komunitas bulu tangkis secara keseluruhan. Prestasi yang dicapai menginspirasi generasi muda untuk terus berlatih dan berusaha mencapai impian mereka. Melalui kemenangan, tim bulu tangkis semakin memperkuat posisi mereka di kancah lokal dan berkontribusi dalam perkembangan olahraga bulu tangkis di wilayahnya.', 
    'Perayaan kemenangan bukan hanya sekadar pesta atau acara, tetapi momen refleksi yang mengingatkan bahwa kesuksesan bukanlah tujuan akhir, melainkan langkah menuju pencapaian yang lebih besar. Dalam setiap kemenangan, terdapat banyak pelajaran berharga yang dapat dipetik, dan semangat untuk terus maju menjadi inti dari perjalanan menuju prestasi yang lebih tinggi.' ],
  },
  {
    id: 8,
    title: createSlug('Membangun Sportivitas yang Tinggi dalam Kompetisi'),
    date: 'Agustus 2024',
    author: 'Fanjaaa_',
    image: 'backgroundTournament',
    content: ['Sportivitas adalah nilai fundamental yang menjadi inti dari setiap kompetisi olahraga, termasuk di turnamen PB WBR 02 Cup 1. Dalam pertandingan yang sengit, para pemain tidak hanya dituntut untuk menunjukkan kemampuan terbaik, tetapi juga sikap yang penuh penghormatan kepada lawan, wasit, dan penonton. Turnamen ini menjadi panggung bagi atlet-atlet berbakat untuk bersaing secara sehat, sembari menanamkan nilai sportivitas dalam setiap langkah mereka di lapangan.',
    'Salah satu momen yang paling mencerminkan sportivitas adalah tos atau salaman setelah pertandingan. Momen ini menjadi simbol persaudaraan dan penghormatan antar pemain, terlepas dari hasil pertandingan. Setiap tos yang dilakukan menggambarkan sikap saling menghargai, baik dalam kemenangan maupun kekalahan, sehingga turnamen ini tidak hanya menjadi ajang kompetisi, tetapi juga pembelajaran bagi setiap peserta untuk menjadi pribadi yang lebih dewasa.',
    'Kompetisi yang sehat di turnamen ini juga didukung oleh kepemimpinan wasit yang adil dan profesional. Setiap keputusan yang diambil mencerminkan integritas dan rasa tanggung jawab, menciptakan suasana pertandingan yang jujur dan sportif. Para pemain pun dengan terbuka menerima hasil pertandingan, menunjukkan sikap yang mencerminkan semangat olahraga sejati.', 
    'Melalui PB WBR 02 Cup 1, nilai-nilai luhur seperti saling menghormati, menerima hasil dengan lapang dada, dan merayakan kemenangan tanpa kesombongan berhasil ditanamkan dalam hati setiap peserta. Turnamen ini bukan hanya menjadi ajang pembuktian diri, tetapi juga perayaan atas persatuan dan persaudaraan yang terjalin di lapangan. Semangat sportivitas yang tinggi ini menjadi warisan berharga bagi seluruh komunitas yang terlibat.' ],
  },
    
]

export default DataArticle
