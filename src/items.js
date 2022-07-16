import { nanoid } from "nanoid";

const hardwareItems = () => {
  return [
    // !pdfs and the other inpage content will also be included in this  (another array can be made in the items array!)

    {
      id: 1,
      name: "fasteners",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656172823/PTC/hardware/fasteners-img_1_c9xl5o.webp",
      seller: "Caparo India Pvt Ltd",
      pdf: "https://drive.google.com/file/d/1EHQfy6eIQd_bCFkwqMcYB4eETyGdrO4H/view?usp=sharing",
      desp: "",
    },
    {
      id: 2,
      name: "locks",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180107/PTC/hardware/locks_v5rkxt.webp",
      seller: "Harrison Locks",
      pdf: "https://drive.google.com/drive/folders/12xveCukjMKrzYvbyR7OAI_MTTo10rCT1?usp=sharing",
    },
    {
      id: 3,
      name: "paints",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180300/PTC/hardware/paint_bppczw.webp",
      seller: "Asian Paints",
      pdf: "https://drive.google.com/file/d/1Z-y7C662i2rTZCoDdiW4rzEik1IZFg_S/view?usp=sharing",
    },
    {
      id: 4,
      name: "sanitary",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180502/PTC/hardware/sanitary_fzrlvy.webp",
      seller: "Prince",
      pdf: "https://drive.google.com/file/d/1WwnnTLzTxc_Y0lg7RO_68ynURjaza2Ne/view?usp=sharing",
    },
    {
      id: 5,
      name: "v-Belts",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180688/PTC/hardware/v-belts_pwmdqu.webp",
      seller: "JK Fenner",
      pdf: "https://drive.google.com/file/d/1GEJXU-GfuysZ1HfSw-hm33CrsbOoUwrL/view?usp=sharing",
    },
    {
      id: 6,
      name: "air-fittings",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180758/PTC/hardware/air_fittings_nsnlau.webp",
      seller: "Techno",
      pdf: "https://drive.google.com/file/d/1QLYyIc5abo1XjKYVs4rw2j2mctuhW51f/view?usp=sharing",
    },
    {
      id: 7,
      name: "power tools",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180828/PTC/hardware/power_tools_1_qdmmzf.webp",
      seller: "JCB",
      pdf: "https://drive.google.com/file/d/18P1HQUgJpDLOwfrQTZwca3RZaP_zx8Yn/view?usp=sharing",
    },
    {
      id: 8,
      name: "lifting items",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180902/PTC/hardware/Lifting_items_fxctrd.webp",
      seller: "Ferreterro",
      pdf: "https://drive.google.com/file/d/1J1dmHqWd_NiYxxi4m6ZXww2AATjbXM7x/view?usp=sharing",
    },
    {
      id: 9,
      name: "welding items",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180996/PTC/hardware/welding_n2hno0.webp",
      seller: "Borris",
      pdf: "https://drive.google.com/file/d/1ilIS1PkVr_5O77nECTD2UzJfZgpjPid7/view?usp=sharing",
    },
    {
      id: 10,
      name: "weld mesh net",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181146/PTC/hardware/net_i2b5yp.webp",
      seller: "Tiger Wire Mesh Nets",
    },
    {
      id: 11,
      name: "tarpaulin",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181225/PTC/hardware/Tarpaulin_uoabyx.webp",
      seller: "Supreme",
    },
    {
      id: 12,
      name: "packaging items",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181316/PTC/hardware/packge_yy3f3z.webp",
      seller: "Twin Tech",
      pdf: "https://drive.google.com/file/d/1Ry6-ljPHWeRBqAPB_n2KiBpUIX6DS4cd/view?usp=sharing",
    },
    {
      id: 13,
      name: "waterproofing items",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181404/PTC/hardware/Sheet-waterproofing-membrane_antpia.webp",
      seller: "Fosroc",
      pdf: "https://drive.google.com/file/d/1zIWcslvV3pxN8LlX6g41dsqhV4rJXxJ0/view?usp=sharing",
    },
    {
      id: 14,
      name: "ms & gi pipes",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180582/PTC/hardware/MS_GI_pipes_wzwvu2.webp",
      seller: "Jindal",
      pdf: "https://drive.google.com/file/d/1mBjvMiL8H3MUOKu-qgrdnlxzJ5Hz_n0_/view?usp=sharing",
    },
    {
      id: 15,
      name: "insulation items",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181498/PTC/hardware/Insulation_ms0wzl.webp",
      seller: "Shreeram Equitech Pvt Ltd",
    },
    {
      id: 16,
      name: "measuring items",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181576/PTC/hardware/Measuring-Items-1_pp0brc.webp",
      seller: "Freemans",
      pdf: "https://drive.google.com/file/d/11jRrLuyLdFcrx62RGq2_cVecsMdGnoAS/view?usp=sharing",
    },
    {
      id: 17,
      name: "bearings",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181734/PTC/hardware/Bearings_m9gmmx.webp",
      seller: "NBC Bearings",
      pdf: "https://drive.google.com/file/d/1EXe7w04DjGN9YF3jj-uXx8v4EoSRytnM/view?usp=sharing",
    },
    {
      id: 18,
      name: "tools & accessories ",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181818/PTC/hardware/Tools-nd-accessories_ujrsuw.webp",
      seller: "Taparia",
      pdf: "https://drive.google.com/file/d/1dt3EXrLKZNtbp4-9uioK8SxjpgptXhjW/view?usp=sharing",
    },
  ];
};

const steelItems = () => {
  return [
    // !pdfs and the other inpage content will also be included in this  (another array can be made in the items array!)
    {
      id: 51,
      name: "shape and sections",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181970/PTC/steel/Shapes_and_sections_zjrex8.webp",
    },
    {
      id: 52,
      name: "round & square pipes",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182107/PTC/steel/Round_and_square_pipes_rn1vmq.webp",
    },
    {
      id: 53,
      name: "ms bar",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182146/PTC/steel/Ms_bars_myrlpw.webp",
    },
    {
      id: 54,
      name: "coil & plate (MS & GI)",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182218/PTC/steel/Coil_and_plate_bhkmfm.webp",
    },
    {
      id: 55,
      name: "flat (MS & SS)",
      img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182263/PTC/steel/AnyConv.com__Flats_MS_GI_ddrf8o.webp",
    },
  ];
};

export { hardwareItems, steelItems };
