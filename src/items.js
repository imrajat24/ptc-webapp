import { nanoid } from "nanoid";

export default () => {
  return [
    // !pdfs and the other inpage content will also be included in this  (another array can be made in the items array!)
    {
      category: "hardware",
      items: [
        {
          id: nanoid(),
          name: "fastners",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656172823/PTC/hardware/fasteners-img_1_c9xl5o.webp",
        },
        {
          id: nanoid(),
          name: "locks",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180107/PTC/hardware/locks_v5rkxt.webp",
        },
        {
          id: nanoid(),
          name: "paints",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180300/PTC/hardware/paint_bppczw.webp",
        },
        {
          id: nanoid(),
          name: "sanitary",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180502/PTC/hardware/sanitary_fzrlvy.webp",
        },
        {
          id: nanoid(),
          name: "v-Belts",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180688/PTC/hardware/v-belts_pwmdqu.webp",
        },
        {
          id: nanoid(),
          name: "air-fittings",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180758/PTC/hardware/air_fittings_nsnlau.webp",
        },
        {
          id: nanoid(),
          name: "power tools",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180828/PTC/hardware/power_tools_1_qdmmzf.webp",
        },
        {
          id: nanoid(),
          name: "lifting items",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180902/PTC/hardware/Lifting_items_fxctrd.webp",
        },
        {
          id: nanoid(),
          name: "welding items",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180996/PTC/hardware/welding_n2hno0.webp",
        },
        {
          id: nanoid(),
          name: "weld mesh net",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181146/PTC/hardware/net_i2b5yp.webp",
        },
        {
          id: nanoid(),
          name: "tarpaulin",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181225/PTC/hardware/Tarpaulin_uoabyx.webp",
        },
        {
          id: nanoid(),
          name: "packaging items",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181316/PTC/hardware/packge_yy3f3z.webp",
        },
        {
          id: nanoid(),
          name: "waterproofing items",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181404/PTC/hardware/Sheet-waterproofing-membrane_antpia.webp",
        },
        {
          id: nanoid(),
          name: "ms & gi pipes",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656180582/PTC/hardware/MS_GI_pipes_wzwvu2.webp",
        },
        {
          id: nanoid(),
          name: "insulation items",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181498/PTC/hardware/Insulation_ms0wzl.webp",
        },
        {
          id: nanoid(),
          name: "measuring items",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181576/PTC/hardware/Measuring-Items-1_pp0brc.webp",
        },
        {
          id: nanoid(),
          name: "bearings",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181734/PTC/hardware/Bearings_m9gmmx.webp",
        },
        {
          id: nanoid(),
          name: "tools & accessories ",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181818/PTC/hardware/Tools-nd-accessories_ujrsuw.webp",
        },
      ],
    },
    {
      category: "steel",
      items: [
        {
          id: nanoid(),
          name: "shape and sections",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656181970/PTC/steel/Shapes_and_sections_zjrex8.webp",
        },
        {
          id: nanoid(),
          name: "round & square pipes",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182107/PTC/steel/Round_and_square_pipes_rn1vmq.webp",
        },
        {
          id: nanoid(),
          name: "ms bar",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182146/PTC/steel/Ms_bars_myrlpw.webp",
        },
        {
          id: nanoid(),
          name: "coil & plate (MS & GI)",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182218/PTC/steel/Coil_and_plate_bhkmfm.webp",
        },
        {
          id: nanoid(),
          name: "flat (MS & SS)",
          img: "https://res.cloudinary.com/dlghjr9qx/image/upload/v1656182263/PTC/steel/AnyConv.com__Flats_MS_GI_ddrf8o.webp",
        },
      ],
    },
  ];
};
