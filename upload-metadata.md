# gta6-clipper-01 — Upload & Submission Metadata

Video final: `entry.mp4` di folder ini (1080×1920, 24 detik, H.264 + AAC, ±20 MB).
Upload file ini APA ADANYA — jangan diedit/di-render ulang di luar sesi agen
(admin make.fun mencocokkan pembuatan klip dengan transkrip sesi).

## Upload YouTube

- Channel: Curio Daily (@CurioDailyWorld) — akun dandwi03@gmail.com
- Visibilitas: **Public** (bukan unlisted/private). Vertikal <60 dtk → otomatis Short.
- Waktu tayang: sesudah 20 Nov 2026 08:00 WIB dan sebelum deadline
  **Senin 23 Nov 2026 08:00 WIB**. Biarkan publik sampai hasil bounty keluar.

### Judul (persis)

```
GTA 6 5-Star Beach Rampage Ends in a BUST 😱
```

### Deskripsi (persis, utuh)

```
GTA 6 is finally here — a pickup truck tears through a packed Vice City beach at a 5-star wanted level… and it does not end well. 🏖️🚔

This clip was cut by my AI agent.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-arbor-orchid-igloo

Gameplay source: "GTA 6 – CRAZY 5-Star Police Chase & Rampage at Vice Ocean Beach!" by Champs Network (https://www.youtube.com/watch?v=8-DRGbQ1IXc)

#GTA6 #GTA6Gameplay #ViceCity #Shorts #Gaming
```

Baris "Made by my AI agent for a $500 bounty…" dan play code
`makefun-arbor-orchid-igloo` WAJIB ada di deskripsi — itu yang dibaca
pemeriksa make.fun (judul/caption tidak dibaca).

### Tag (kolom Tags di YouTube Studio)

```
gta 6, gta vi, gta 6 gameplay, gta 6 beach rampage, gta 6 police chase, vice city, gta 6 shorts, gaming, make.fun
```

- Kategori: Gaming. Audience: Not made for kids.

## Sesudah URL video didapat — submission make.fun

1. Salin alamat video dari tombol Share YouTube
   (`https://www.youtube.com/shorts/<id>`).
2. Tulis ke `VIDEO.json` di folder ini:
   `{"url":"https://www.youtube.com/shorts/<id>"}`
3. Uji lokal seperti grader:
   `cd ~/workspace/makefun-bounties/builds2/gta6-clipper-01 && mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
   (sukses = diam, `out/VIDEO.json` identik dengan `VIDEO.json`).
4. Commit dengan identitas wallet:
   `git add -A && git commit -m "Enter GTA 6 beach rampage clip"` —
   repo ini sudah dikonfigurasi user.name/user.email =
   GxNEA2cS1xFmXxe7kqLmjUxm5ePjAmzT7Dn22GYLWLKW.
   Buat repo GitHub PUBLIK baru (dibuat sesudah pembukaan bounty ✓), push,
   catat URL repo + sha commit final.
5. Ekspor usage sesi pembuat klip (subagent a2da3e01 — baris usage baru ada
   di muse.db SESUDAH sesinya berakhir; bundle dibuat dari sesi agen utama
   sesudah subagent selesai, sesuai prosedur watch):
   `~/workspace/makefun-bounties/bundles/muse-usage-gta6-clipper-01.jsonl`
6. Bundle:
   `node ~/workspace/makefun-bounties/gta6-clipper-01-kit/cli/makefun.mjs bundle --repo ~/workspace/makefun-bounties/builds2/gta6-clipper-01 --out ~/workspace/makefun-bounties/bundles/gta6-clipper-01.tar.gz --muse-usage ~/workspace/makefun-bounties/bundles/muse-usage-gta6-clipper-01.jsonl --redact-file ~/workspace/makefun-bounties/redact.txt`
7. Check (semua gate lokal harus lolos):
   `node ~/workspace/makefun-bounties/gta6-clipper-01-kit/cli/makefun.mjs check --kit ~/workspace/makefun-bounties/gta6-clipper-01-kit --repo ~/workspace/makefun-bounties/builds2/gta6-clipper-01 --transcripts ~/workspace/makefun-bounties/bundles/gta6-clipper-01.tar.gz`
8. Submit (bentuk persis AGENT.md kit ini):
   `node ~/workspace/makefun-bounties/gta6-clipper-01-kit/cli/makefun.mjs submit --competition gta6-clipper-01 --repo-url https://github.com/<owner>/<repo> --commit <sha> --title "GTA 6 5-Star Beach Rampage Ends in a BUST" --bundle ~/workspace/makefun-bounties/bundles/gta6-clipper-01.tar.gz --keypair ~/.config/makefun/keypair-cli.json`
   Lalu `status --submission <id>` sampai checked/scored.
9. Catat ke `~/workspace/makefun-bounties/watch-state.json` (entered:
   submission id + claim code) + satu baris ke log harian `~/memory/`.

Catatan: bila entry ditolak karena deskripsi kurang baris/kode, perbaiki
deskripsi di YouTube Studio lalu submit commit yang SAMA — tidak perlu
upload ulang. Jangan pernah membeli views/bot (diskualifikasi).

## Isi klip (untuk arsip)

- Sumber: gameplay Champs Network `8-DRGbQ1IXc`, seksi 175–240 dtk;
  klip memakai relatif 30–54 dtk dari seksi itu (payung pantai diterabas →
  polisi/code enforcer tiba → truk ringsek).
- Teks layar: hook "GTA 6 IS FINALLY HERE / 5-STAR BEACH RAMPAGE" (0–4 dtk),
  "ZERO BRAKES." (6,5–10,5 dtk), kartu pitch make.fun (17–24 dtk):
  "Make clips like this with AI and earn money on make.fun" +
  "make.fun/bounty/gta6-clipper-01".
- Berkas kerja (sumber seksi, filter, frame cek):
  `~/workspace/makefun-bounties/gta6-clipper-01-work/`
