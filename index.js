const _ = require('lodash');

const dataRaporSekolah = [
  {
    nama: "John",
    kelas: "10A",
    nilaiUjian: {
      matematika: 90,
      ipa: 87,
      ips: 80,
      bahasa: 100,
      komputer: 90,
      nilaiRataUjian: 0,
      naikKelas: true,
      ranking: 0,
    },
  },
  {
    nama: "Jane",
    kelas: "10B",
    nilaiUjian: {
      matematika: 85,
      ipa: 89,
      ips: 90,
      bahasa: 95,
      komputer: 88,
      nilaiRataUjian: 0,
      naikKelas: true,
      ranking: 0,
    },
  },
  {
    nama: "Alice",
    kelas: "10C",
    nilaiUjian: {
      matematika: 78,
      ipa: 82,
      ips: 85,
      bahasa: 88,
      komputer: 91,
      nilaiRataUjian: 0,
      naikKelas: true,
      ranking: 0,
    },
  },
  {
    nama: "Bob",
    kelas: "10D",
    nilaiUjian: {
      matematika: 92,
      ipa: 90,
      ips: 89,
      bahasa: 94,
      komputer: 87,
      nilaiRataUjian: 0,
      naikKelas: true,
      ranking: 0,
    },
  },
  {
    nama: "Charlie",
    kelas: "10E",
    nilaiUjian: {
      matematika: 84,
      ipa: 83,
      ips: 82,
      bahasa: 81,
      komputer: 85,
      nilaiRataUjian: 0,
      naikKelas: true,
      ranking: 0,
    },
  },
  {
    nama: "David",
    kelas: "10F",
    nilaiUjian: {
      matematika: 88,
      ipa: 87,
      ips: 86,
      bahasa: 85,
      komputer: 84,
      nilaiRataUjian: 0,
      naikKelas: true,
      ranking: 0,
    },
  },
  {
    nama: "Eva",
    kelas: "10G",
    nilaiUjian: {
      matematika: 93,
      ipa: 91,
      ips: 90,
      bahasa: 92,
      komputer: 89,
      nilaiRataUjian: 0,
      naikKelas: true,
      ranking: 0,
    },
  },
  {
    nama: "Frank",
    kelas: "10H",
    nilaiUjian: {
      matematika: 77,
      ipa: 75,
      ips: 78,
      bahasa: 80,
      komputer: 82,
      nilaiRataUjian: 0,
      naikKelas: true,
      ranking: 0,
    },
  },
  {
    nama: "Grace",
    kelas: "10I",
    nilaiUjian: {
      matematika: 95,
      ipa: 94,
      ips: 96,
      bahasa: 97,
      komputer: 98,
      nilaiRataUjian: 0,
      naikKelas: true,
      ranking: 0,
    },
  },
  {
    nama: "Henry",
    kelas: "10J",
    nilaiUjian: {
      matematika: 81,
      ipa: 83,
      ips: 85,
      bahasa: 87,
      komputer: 89,
      nilaiRataUjian: 0,
      naikKelas: true,
      ranking: 0,
    },
  },
];

function hitungRataRata(nilaiUjian) {
  const { matematika, ipa, ips, bahasa, komputer } = nilaiUjian;
  return (matematika + ipa + ips + bahasa + komputer) / 5;
}

function tentukanNaikKelas(nilaiRataRata) {
  return nilaiRataRata > 50 ? 'Ya' : 'Tidak';
}

function urutkanRanking(dataRapor) {
  dataRapor.forEach((siswa) => {
    siswa.nilaiUjian.nilaiRataUjian = hitungRataRata(siswa.nilaiUjian);
    siswa.nilaiUjian.naikKelas = tentukanNaikKelas(siswa.nilaiUjian.nilaiRataUjian);
  });

  const dataRaporUrut = _.orderBy(dataRapor, ['nilaiUjian.nilaiRataUjian'], ['desc']);

  dataRaporUrut.forEach((siswa, index) => {
    siswa.nilaiUjian.ranking = index + 1;
  });

  return dataRaporUrut;
}

function tampilkanRapor(dataRapor) {
  dataRapor.forEach((siswa) => {
    console.log(`Rapor Sekolah ${siswa.nama}`);
    console.log(`Kelas: ${siswa.kelas}`);
    console.log(`NILAI UJIAN`);
    console.log(`matematika: ${siswa.nilaiUjian.matematika}`);
    console.log(`ipa: ${siswa.nilaiUjian.ipa}`);
    console.log(`ips: ${siswa.nilaiUjian.ips}`);
    console.log(`bahasa: ${siswa.nilaiUjian.bahasa}`);
    console.log(`komputer: ${siswa.nilaiUjian.komputer}`);
    console.log(`NILAI RATA-RATA: ${siswa.nilaiUjian.nilaiRataUjian.toFixed(1)}`);
    console.log(`NAIK KELAS: ${siswa.nilaiUjian.naikKelas}`);
    console.log(`RANKING: ${siswa.nilaiUjian.ranking}`);
    console.log('');
  });
}

const dataRaporUrut = urutkanRanking(dataRaporSekolah);
tampilkanRapor(dataRaporUrut);
