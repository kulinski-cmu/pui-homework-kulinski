const threadColorsByName = {
    "Ecru" : {
        "hex" : "#FFF7E7",
        "number" : "Ecru", 
    },
    "White" : {
        "hex" : "#FCFCFF",
        "number" : "White^",
    }, 
    "Snow White" : {
        "hex" : "#FFFFFF",
        "number" : "B5200",
    },
    "White Tin" : {
        "hex" : "#EFEEF0",
        "number" : 1,
    },
    "Tin" : {
        "hex" : "#C5C4C9",
        "number" : 2,
    },
    "Tin - Medium" : {
        "hex" : "#B0B0B5",
        "number" : 3,
    },
    "Tin - Dark" : {
        "hex" : "#9C9B9D",
        "number" : 4,
    },
    "Driftwood - Light" : {
        "hex" : "#E3CCBE",
        "number" : 5,
    },
    "Driftwood - Medium Light" : {
        "hex" : "#DCC6B8",
        "number" : 6, 
    },
    "Driftwood" : {
        "hex" : "#CCB8AA",
        "number" : 7,
    },
    "Driftwood - Dark" : {
        "hex" : "#9D7D71",
        "number" : 8,
    },
    "Cocoa - Very Dark" : {
        "hex" : "#552014",
        "number" : 9,
    },
    "Tender Green - Very Light" : {
        "hex" : "#EDFED9",
        "number" : 10,
    },
    "Tender Green - Light" : {
        "hex" : "#E2EDB5",
        "number" : 11,
    },
    "Tender Green" : {
        "hex" : "#CDD99A",
        "number" : 12, 
    },
    "Nile Green - Medium Light" : {
        "hex" : "#BFF6E0",
        "number" : 13,
    },
    "Apple Green - Pale" : {
        "hex" : "#D0FBB2",
        "number" : 14,
    },
    "Apple Green" : {
        "hex" : "#D1EDA4",
        "number" : 15,
    },
    "Chartreuse - Light" : {
        "hex" : "#A4D67C",
        "number" : 16,
    },
    "Yellow Plum - Light" : {
        "hex" : "#E5E272",
        "number" : 17,
    },
    "Yellow Plum" : {
         "hex" : "#D9D56D",
         "number" : 18,
    },
    "Autumn Gold - Medium Light" : {
        "hex" : "#F7C95F",
        "number" : 19,
    },
    "Shrimp" : {
        "hex" : "#F7AF93",
        "number" : 20,
    },
    "Alizarian - Light" : {
        "hex" : "#D79982",
        "number" : 21,
    },
    "Alizarian" : {
        "hex" : "#BC604E",
        "number" : 22,
    },
    "Apple Blossom" : {
        "hex" : "#EDE2ED",
        "number" : 23,
    },
    "White Lavender" : {
        "hex" : "#E0D7EE",
        "number" : 24,
    },
    "Lavender - Ultra Light" : {
        "hex" : "#DAD2E9",
        "number" : 25,
    },
    "Lavender - Pale" : {
        "hex" : "#CFC8DE",
        "number" : 26,
    },
    "White Violet" : {
        "hex" : "#E9ECFC",
        "number" : 27,
    },
    "Eggplant - Medium Light" : {
        "hex" : "#7D4E92",
        "number" : 28,
    },
    "Eggplant" : {
        "hex" : "#674076",
        "number" : 29,
    },
    "Blueberry - Medium Light" : {
        "hex" : "#6D54D3",
        "number" : 30,
    },
    "Blueberry" : {
        "hex" : "#5834A3",
        "number" : 31,
    },
    "Blueberry - Dark" : {
        "hex" : "#4D2E8A",
        "number" : 32,
    },
    "Fuchsia" : {
        "hex" : "#D9539F",
        "number" : 33,
    },
    "Fuchsia - Dark" : {
        "hex" : "#AE4280",
        "number" : 34,
    },
    "Fuchsia - Very Dark" : {
        "hex" : "#732B55",
        "number" : 35,
    },
    "Red - Bright" : { 
        "hex" : "#CF0053",
        "number" : 150,
    },
    "Pink" : {
        "hex" : "#FFCBD7",
        "number" : 151,
    },
    "Tawny - Dark" : {
        "hex" : "#E1A1A1",
        "number" : 152,
    },
    "Lilac" : {
        "hex" : "#EAC5EB",
        "number" : 153,
    },
    "Red - Very Dark" : {
        "hex" : "#4B233A",
        "number" : 154,
    },
    "Forget-me-not Blue" : {
        "hex" : "#9774B6",
        "number" : 155,
    },
    "Blue - Medium" : {
        "hex" : "#8577B4",
        "number" : 156,
    },
    "Blue - Light" : {
        "hex" : "#B5B8EA",
        "number" : 157,
    },
    "Blue - Dark" : {
        "hex" : "#393068",
        "number" : 158,
    },
    "Petrol Blue - Light" : {
        "hex" : "#BCB5DE",
        "number" : 159,
    },
    "Petrol Blue - Medium" : {
        "hex" : "#8178A9",
        "number" : 160,
    },
    "Petrol Blue - Dark" : {
        "hex" : "#60568B",
        "number" : 161,
    },
    "Baby Blue - Light" : {
        "hex" : "#CAE7F0",
        "number" : 162,
    },
    "Green" : {
        "hex" : "#557A60",
        "number" : 163,
    },
    "Green - Light" : {
        "hex" : "#BAE4B6",
        "number" : 164,
    },
    "Green - Bright" : {
        "hex" : "#E1F477",
        "number" : 165,
    },
    "Lime Green" : {
        "hex" : "#ADC238",
        "number" : 166,
    },
    "Khaki Brown" : { 
        "hex" : "#855D31",
        "number" : 167,
    },
    "Silver Gray" : {
        "hex" : "#B1AEB7",
        "number" : 168,
    },
    "Pewter Gray" : {
        "hex" : "#827D7D",
        "number" : 169,
    },
    "Lavender - Very Dark" :{
        "hex" : "#9442A7",
        "number" : 208,
    },
    "Lavender - Dark" : {
        "hex" : "#BA72C6",
        "number" : 209,
    },
    "Lavender - Medium" : {
        "hex" : "#D49FE1",
        "number" : 210,
    },
    "Lavender - Light" : {
        "hex" : "#E5BDED",
        "number" : 211,
    },
    "Shell Pink - Very Dark" : {
        "hex" : "#792631",
        "number" : 221,
    },
    "Shell Pink - Light" : {
        "hex" : "#BB6864",
        "number" : 223,
    },
    "Shell Pink - Very Light" : {
        "hex" : "#E2A598",
        "number" : 224,
    },
    "Shell Pink - Ultra Very Light" : {
        "hex" : "#F8D9CD",
        "number" : 225, 
    },
    "Mahogany - Very Dark" : {
        "hex" : "#6C3116",
        "number" : 300,
    },
    "Mahogany - Medium" : {
        "hex" : "#AA5237",
        "number" : 301,
    },
    "Red - Medium" : {
        "hex" : "#A10C39",
        "number" : 304,
    },
    "Lemon" : {
        "hex" : "#FDE949",
        "number" : 307,
    },
    "Rose - Dark" : {
        "hex" : "#BA2044",
        "number" : 309,
    },
    "Black" : {
        "hex" : "#000000",
        "number" : 310,
    },
    "Blue - Medium" : {
        "hex" : "#002A64",
        "number" : 311,
    },
    "Baby Blue - Very Dark" : {
        "hex" : "#1F3279",
        "number" : 312,
    },
    "Antique Mauve - Medium Dark" : {
        "hex" : "#7D4246",
        "number" : 315,
    },
    "Antique Mauve - Medium" : {
        "hex" : "#BC757F",
        "number" : 316,
    },
    "Steel Gray - Light" : {
        "hex" : "#999B9D",
        "number" : 318,
    },
    "Pistachio Green - Very Dark" : {
        "hex" : "#3A553B",
        "number" : 319,
    },
    "Pistachio Green - Medium" : {
        "hex" : "#608C59",
        "number" : 320,
    },
    "Red" : {
        "hex" : "#BD1136",
        "number" : 321,
    },
    "Baby Blue" : {
        "hex" : "#3A609D",
        "number" : 322,
    },
    "Rose - Very Dark" : {
        "hex" : "#AC1C37",
        "number" : 326,
    },
    "Violet" : {
        "hex" : "#5E0F77",
        "number" : 327,
    },
    "Blue Violet - Very Dark" : {
        "hex" : "#6E2E9B",
        "number" : 333,
    },
    "Baby Blue - Medium" : {
        "hex" : "#6085B8",
        "number" : 334,
    },
    "Rose" : {
        "hex" : "#D63D57",
        "number" : 335,
    },
    "Blue" : {
        "hex" : "#0C275E",
        "number" : 336,
    },
    "Blue Violet - Medium" : {
        "hex" : "#996DC3",
        "number" : 340,
    },
    "Blue Violet - Light" : {
        "hex" : "#A39AD7",
        "number" : 341,
    },
    "Salmon - Very Dark" : {
        "hex" : "#AB1B33",
        "number" : 347,
    },
    "Coral - Dark" : {
        "hex" : "#C62C38",
        "number" : 349,
    },
    "Coral - Medium" : {
        "hex" : "#DE3F40",
        "number" : 350,
    },
    "Coral" : {
        "hex" : "#ED625B",
        "number" : 351,
    },
    "Coral - Light" : {
        "hex" : "#F78372",
        "number" : 352,
    },
    "Peach" : {
        "hex" : "#FDB4A1", 
        "number" : 353,
    },
    "Terra Cotta - Dark" : {
        "hex" : "#97382B",
        "number" : 355,
    },
    "Terra Cotta - Medium" : {
        "hex" : "#BE5C4B",
        "number" : 356,
    },
    "Pistachio Green - Dark" : {
        "hex" : "#446B45",
        "number" : 367,
    },
    "Pistachio Green - Light" : {
        "hex" : "#7FC66D",
        "number" : 368,
    },
    "Pistachio Green - Very Light" : {
        "hex" : "#CDEFA6",
        "number" : 369,
    },
    "Mustard - Medium" : {
        "hex" : "#917245",
        "number" : 370,
    },
    "Mustard" : {
        "hex" : "#9F8352",
        "number" : 371,
    },
    "Mustard - Light" : {
        "hex" : "#AD9564",
        "number" : 372,
    },
    "Mahogany - Dark" : {
        "hex" : "#813718",
        "number" : 400,
    },
    "Mahogany - Very Light" : {
        "hex" : "#EF9E74",
        "number" : 402,
    },
    "Desert Sand - Dark" : {
        "hex" : "#B77159",
        "number" : 407,
    },
    "Pewter Gray - Dark" : {
        "hex" : "#4A4749",
        "number" : 413,
    },
    "Steel Gray - Dark" : {
        "hex" : "#766E72",
        "number" : 414,
    },
    "Pearl Gray" : {
        "hex" : "#B8B9BD",
        "number" : 415,
    },
    "Hazelnut Brown - Dark" : {
        "hex" : "#855A30",
        "number" : 420,
    },
    "Hazelnut Brown - Light" : {
        "hex" : "#C99A67",
        "number" : 422,
    },
    "Brown - Medium" : {
        "hex" : "#73421E",
        "number" : 433,
    },
    "Brown - Light" : {
        "hex" : "#8F5332",
        "number" : 434,
    },
    "Brown - Very Light" : {
        "hex" : "#A96538",
        "number" : 435,
    } ,
    "Tan" : {
        "hex" : "#C78559",
        "number" : 436,
    },
    "Tan - Light" : {
        "hex" : "#DAA26F",
        "number" : 437,
    },
    "Lemon - Dark" : {
        "hex" : "#F5BC13",
        "number" : 444,
    },
    "Lemon - Light" : {
        "hex" : "#FCF999",
        "number" : 445,
    }, 
    "Shell Gray - Dark" : {
        "hex" : "#887773",
        "number" : 451,
    },
    "Shell Gray - Medium" : {
        "hex" : "#AD9994",
        "number" : 452,
    },
    "Shell Gray - Light" : {
        "hex" : "#CCB8AA",
        "number" : 453,
    },
    "Avocado Green" : {
        "hex" : "#5B6533",
        "number" : 469,
    },
    "Avocado Green - Light" : {
        "hex" : "#72813E",
        "number" : 470,
    },
    "Avocado Green - Very Light" : {
        "hex" : "#9EB357",
        "number" : 471,
    },
    "Avocado Green - Ultra Light" : {
        "hex" : "#D1DE75",
        "number" : 472,
    },
    "Red - Dark" : {
        "hex" : "#970B2C",
        "number" : 498,
    },
    "Blue Green - Very Dark" : {
        "hex" : "#1D362A",
        "number" : 500,
    },
    "Blue Green - Dark" : {
        "hex" : "#2F5446",
        "number" : 501,
    },
    "Blue Green" : {
        "hex" : "#57826E",
        "number" : 502,
    },
    "Blue Green - Medium" : {
        "hex" : "#89B89F",
        "number" : 503,
    },
    "Blue Green - Very Light" : {
        "hex" : "#ACDAC1",
        "number" : 504,
    },
    "Grass Green - Dark" : {
        "hex" : "#338362",
        "number" : 505,
    },
    "Wedgewood - Dark" : {
        "hex" : "#216285",
        "number" : 517,
    },
    "Wedgewood - Light" : {
        "hex" : "#50819C",
        "number" : 518,
    },
    "Sky Blue" : {
        "hex" : "#94B7CB",
        "number" : 519,
    },
    "Fern Green - Dark" : {
        "hex" : "#384526",
        "number" : 520,
    },
    "Fern Green" : {
        "hex" : "#808B6E",
        "number" : 522,
    },
    "Fern Green - Light" : {
        "hex" : "#959F7A",
        "number" : 523,
    },
    "Fern Green - Very Light" : {
        "hex" : "#AEA78E",
        "number" : 524,
    },
    "Ash Gray - Very Light" : {
        "hex" : "#4B4B49",
        "number" : 535,
    },
    "Beige Brown - Ultra Very Light" : {
        "hex" : "#EAD0B5",
        "number" : 543,
    },
    "Violet - Very Dark" : {
        "hex" : "#580E5C",
        "number" : 550,
    },
    "Violet - Medium" : {
        "hex" : "#902F99",
        "number" : 552,        
    },
    "Violet" : {
        "hex" : "#A449AC",
        "number" : 553,
    },
    "Violet - Light" : {
        "hex" : "#DC9CDE",
        "number" : 554,
    },
    "Jade - Very Dark" : {
        "hex" : "#285E48",
        "number" : 561,
    },
    "Jade - Medium" : {
        "hex" : "#3B8C5A",
        "number" : 562,
    },
    "Jade - Light" : {
        "hex" : "#6ED39A",
        "number" : 563,
    },
    "Jade - Very Light" : {
        "hex" : "#95E4AF",
        "number" : 564,
    },
    "Moss Green - Dark" : {
        "hex" : "#355F0B",
        "number" : 580,
    },
    "Moss Green" : {
        "hex" : "#838A29",
        "number" : 581,
    },
    "Turquoise" : {
        "hex" : "#52ADAB",
        "number" : 597,
    },
    "Turquoise - Light" : {
        "hex" : "#97D8D3",
        "number" : 598,
    },
    "Cranberry - Very Dark" : {
        "hex" : "#BF1C48",
        "number" : 600,
    },
    "Cranberry - Medium" : {
        "hex" : "#D63F68",
        "number" : 601,
    },
    "Cranberry - Light Medium" : {
        "hex" : "#FB4B7C",
        "number" : 603,
    }, 
    "Cranberry - Light" : {
        "hex" : "#F793B2",
        "number" : 604,
    },
    "Cranberry - Very Light" : {
        "hex" : "#FBACC4",
        "number" : 605,
    },
    "Orange-red - Bright" : {
        "hex" : "#F70F00",
        "number" : 606,
    },
    "Orange - Bright" : {
        "hex" : "#FD480C",
        "number" : 608,
    },
    "Drab Brown - Dark" : {
        "hex" : "#6B5039",
        "number" : 610,
    },
    "Drab Brown" : {
        "hex" : "#7C5F46",
        "number" : 611,
    },
    "Drab Brown - Light" : {
        "hex" : "#A6885E",
        "number" : 612,
    },
    "Drab Brown - Very Light" : {
        "hex" : "#B99F72",
        "number" : 613,
    },
    "Desert Sand - Ultra Very Dark" : {
        "hex" : "#7F4232",
        "number" : 632,
    },
    "Beige Gray - Very Dark" : {
        "hex" : "#817868", 
        "number" : 640,
    },
    "Beige Gray - Dark" : {
        "hex" : "#958D79",
        "number" : 642,
    },
    "Beige Gray - Medium" : {
        "hex" : "#C4BEA6",
        "number" : 644,
    },
    "Beaver Gray - Very Dark" : {
        "hex" : "#5D5D54",
        "number" : 645,
    },
    "Beaver Gray - Dark" : {
        "hex" : "#6B6860",
        "number" : 646,
    },
    "Beaver Gray - Medium" : {
        "hex" : "#908E85",
        "number" : 647,
    },
    "Beaver Gray - Light" : {
        "hex" : "#A7A69F",
        "number" : 648,
    },
    "Red - Bright" : { 
        "hex" : "#CE1B33",
        "number" : 666,
    },
    "Old Gold - Light" : {
        "hex" : "#ECBF7D",
        "number" : 676,
    },
    "Old Gold - Very Light" : {
        "hex" : "#F2DC9F",
        "number" : 677,
    },
    "Old Gold - Dark" : {
        "hex" : "#B07B46",
        "number" : 680,
    },
    "Green" : {
        "hex" : "#075B26",
        "number" : 699,
    },
    "Green - Bright" : {
        "hex" : "#076C34",
        "number" : 700,
    },
    "Green - Light" : {
        "hex" : "#217C36",
        "number" : 701,
    },
    "Kelly Green" : {
        "hex" : "#379130",
        "number" : 702,
    },
    "Chartreuse" : {
        "hex" : "#63B330",
        "number" : 703,
    },
    "Chartreuse - Bright" : {
        "hex" : "#88C53A",
        "number" : 704,
    },
    "Cream" : {
        "hex" : "#F6EFDA",
        "number" : 712,
    },
    "Plum" : {
        "hex" : "#CB2089",
        "number" : 718,
    },
    "Orange Spice - Dark" : {
        "hex" : "#C83A24",
        "number" : 720,
    },
    "Orange Spice - Medium" : {
        "hex" : "#F46440",
        "number" : 721,
    },
    "Orange Spice - Light" : {
        "hex" : "#F98756",
        "number" : 722,
    },
    "Topaz" : {
        "hex" : "#F9C15B",
        "number" : 725,
    },
    "Topaz - Light" : {
        "hex" : "#FDDB63",
        "number" : 726,
    },
    "Topaz - Very Light" : {
        "hex" : "#FDE98B",
        "number" : 727,
    },
    "Golden Yellow" : {
        "hex" : "#F2AE3F",
        "number" : 728,
    },
    "Old Gold - Medium" : {
        "hex" : "#CE9657",
        "number" : 729,
    },
    "Olive Green - Very Dark" : {
        "hex" : "#63520B",
        "number" : 730,
    },
    "Olive Green - Dark" : {
        "hex" : "#6B580B",
        "number" : 731,
    },
    "Olive Green" : {
        "hex" : "#725C0C0",
        "number" : 732,
    },
    "Olive Green - Medium" : {
        "hex" : "#A78A44",
        "number" : 733,
    },
    "Olive Green - Light" : {
        "hex" : "#BB9C54",
        "number" : 734,
    },
    "Tan - Very Light" : {
        "hex" : "#E2B783",
        "number" : 738,
    },
    "Tan - Ultra Very Light" : {
        "hex" : "#F2DEB9",
        "number" : 739,
    },
    "Tangerine" : {
        "hex" : "#FD6F1A",
        "number" : 740,
    },
    "Tangerine - Medium" : {
        "hex" : "#FC8B10",
        "number" : 741,
    },
    "Tangerine - Light" : {
        "hex" : "#FDAE3C",
        "number" : 742,
    },
    "Yellow - Medium" : {
        "hex" : "#FDD769",
        "number" : 743,
    },
    "Yellow - Pale" : {
        "hex" : "#FEE88D",
        "number" : 744,
    },
    "Yellow - Light Pale" : {
        "hex" : "#FEEBA5",
        "number" : 745,
    },
    "Off White" : {
        "hex" : "#FAF2D5",
        "number" : 746,
    },
    "Sky Blue - Very Light" : {
        "hex" : "#CEE9EA",
        "number" : 747,
    },
    "Peach - Light" : {
        "hex" : "#F7C9B0",
        "number" : 754,
    },
    "Terra Cotta - Very Light" : {
        "hex" : "#E99F83",
        "number" : 758,
    },
    "Salmon" : {
        "hex" : "#EC8880",
        "number" : 760,
    },
    "Salmon - Light" : {
        "hex" : "#F8B4AD",
        "number" : 761,
    },
    "Pearl Gray - Very Light" : {
        "hex" : "#D1D0D2",
        "number" : 762,
    },
    "Yellow Green - Very Light" : {
        "hex" : "#D7EFA7",
        "number" : 772,
    },
    "Baby Blue - Very Light" : {
        "hex" : "#D4E3EF",
        "number" : 775,
    },
    "Pink - Medium" : {
        "hex" : "#FCA8AD",
        "number" : 776,
    },
    "Red - Deep" : {
        "hex" : "#9B0042",
        "number" : 777,
    },
    "Antique Mauve - Very Light" : {
        "hex" : "#9B0042",
        "number" : 778,
    },
    "Brown" : {
        "hex" :"#53332D",
        "number" : 779,
    },
    "Topaz - Ultra Very Dark" : {
        "hex" : "#945026",
        "number" : 780,
    },
    "Topaz - Very Dark" : {
        "hex" : "#A25F1F",
        "number" : 781,
    },
    "Topaz - Dark" : {
        "hex" : "#B26923",
        "number" : 782,
    },
    "Topaz - Medium" : {
        "hex" : "#D0883D",
        "number" : 783,
    },
    "Cornflower Blue - Very Dark" : {
        "hex" : "#2D2068",
        "number" : 791,
    },
    "Cornflower Blue - Dark" : {
        "hex" : "#454B8B",
        "number" : 792,
    },
    "Cornflower Blue - Medium" : {
        "hex" : "#7C82B5",
        "number" : 793,
    },
    "Cornflower Blue - Light" : {
        "hex" : "#A0B2D7",
        "number" : 794,
    },
    "Royal Blue - Dark" : {
        "hex" : "#272276",
        "number" : 796,
    },
    "Royal Blue" : {
        "hex" : "#2B3288",
        "number" : 797,
    },
    "Delft Blue - Dark" : {
        "hex" : "#4E5CA7",
        "number" : 798,
    } ,
    "Delft Blue - Medium" : {
        "hex" : "#6B7FC0",
        "number" : 799,
    },
    "Delft Blue - Pale" : {
        "hex" : "#B5C7E9",
        "number" : 800,
    },
    "Coffee Brown - Dark" : {
        "hex" : "#60391D",
        "number" : 801,
    },
    "Blue - Deep" : {
        "hex" : "#202754",
        "number" : 803,
    },
    "Peacock Blue - Dark" : {
        "hex" : "#1D6C87",
        "number" : 806,
    },
    "Peacock Blue" : {
        "hex" : "#1D6C87",
        "number" : 807,
    },
    "Delft Blue" : {
        "hex" : "#919FD5",
        "number" : 809,
    },
    "Blue - Light" : {
        "hex" : "#7FA0C6",
        "number" : 813,
    },
    "Garnet - Dark" : {
        "hex" : "#711033",
        "number" : 814,
    },
    "Garnet - Medium" : {
        "hex" : "#800B34",
        "number" : 815,
    },
    "Garnet" : {
        "hex" : "#921238",
        "number" : 816,
    },
    "Coral Red - Very Dark" : {
        "hex" : "#BB1630",
        "number" : 817,
    },
    "Baby Pink" : {
        "hex" : "#FEDEDD",
        "number" : 818,
    },
    "Baby Pink - Light" : {
        "hex" : "#FCEBDE",
        "number" : 819,
    },
    "Royal Blue - Very Dark" : {
        "hex" : "#151264",
        "number" : 820,
    },
    "Beige Gray - Light" : {
        "hex" : "#E8DFC7",
        "number" : 822,
    },
    "Blue - Dark" : {
        "hex" : "#000B44",
        "number" : 823,
    },
    "Blue - Very Dark" : {
        "hex" : "#284779",
        "number" : 824,
    },
    "Blue - Medium" : {
        "hex" : "#5075A7",
        "number" : 826,
    },
    "Blue - Very Light" : {
        "hex" : "#A4C1DE",
        "number" : 827,
    },
    "Blue - Ultra Very Light" : {
        "hex" : "#C3D7E6",
        "number" : 828,
    },
    "Golden Olive - Very Dark" : {
        "hex" : "#64480C",
        "number" : 829,
    },
    "Golden Olive - Dark" : {
        "hex" : "#6E501D",
        "number" : 830,
    },
    "Golden Olive - Medium" : {
        "hex" : "#7C5F20",
        "number" : 831,
    },
    "Golden Olive" : {
        "hex" : "#9C7230",
        "number" : 832,
    },
    "Golden Olive - Light" : {
        "hex" : "#B99956",
        "number" : 833,
    },
    "Golden Olive - Very Light" : {
        "hex" : "#D2B468",
        "number" : 834,
    },
    "Beige Brown - Very Dark" : {
        "hex" : "#4A3021",
        "number" : 838,
    },
    "Beige Brown - Dark" : {
        "hex" : "#5A3C2D",
        "number" : 839,
    },
    "Beige Brown - Medium" : {
        "hex" : "#7A5939",
        "number" : 840,
    },
    "Beige Brown - Light" : {
        "hex" : "#A37D64",
        "number" : 841,
    },
    "Beige Brown - Very Light" : {
        "hex" : "#CBB094",
        "number" : 842,
    },
    "Beaver Gray - Ultra Dark" : {
        "hex" : "#494842",
        "number" : 842,
    },
    "Hazel Nut Brown" : {
        "hex" : "#995C30",
        "number" : 868,
    },
    "Hazel Nut Brown - Very Dark" : {
        "hex" : "#784C28",
        "number" : 869,
    },
    "Pistachio Green - Ultra Dark" : {
        "hex" : "#324233",
        "number" : 890,
    },
    "Carnation - Dark" : {
        "hex" : "#EE3246",
        "number" : 891,
    },
    "Carnation - Medium" : {
        "hex" : "#F44753",
        "number" : 892,
    },
    "Carnation - Light" : {
        "hex" : "#F66879",
        "number" : 893,
    },
    "Carnation - Very Light" : {
        "hex" : "#FD95A3",
        "number" : 894,
    },
    "Hunter Green - Very Dark" : {
        "hex" : "#344B2E",
        "number" : 895,
    },
    "Coffee Brown - Very Dark" : {
        "hex" : "#532F1B",
        "number" : 898,
    },
    "Rose - Medium" : {
        "hex" : "#EA6B78",
        "number" : 899,
    },
    "Burnt Orange - Dark" : {
        "hex" : "#C63117",
        "number" : 900,
    },
    "Garnet - Very Dark" : {
        "hex" : "#651329", 
        "number" : 902,
    },
    "Parrot Green - Very Dark" : {
        "hex" : "#386324",
        "number" : 904,
    },
    "Parrot Green - Dark" : {
        "hex" : "#467924",
        "number" : 905,
    },
    "Parrot Green - Medium" : {
        "hex" : "#6C9E29",
        "number" : 906,
    },
    "Parrot Green - Light" : {
        "hex" : "#9DC72D",
        "number" : 907,
    },
    "Emerald Green - Very Dark" : {
        "hex" : "#106B43",
        "number" : 909,
    },
    "Emerald Green - Dark" : {
        "hex" : "#10814E",
        "number" : 910,
    },
    "Emerald Green - Medium" : {
        "hex" : "#109256",
        "number" : 911,
    },
    "Emerald Green - Light" : {
        "hex" : "#36B26B",
        "number" : 912,
    },
    "Nile Green - Medium" : {
        "hex" : "#55CA7D",
        "number" : 913,
    },
    "Plum - Dark" : {
        "hex" : "#95085A",
        "number" : 915,
    },
    "Plum - Medium" : {
        "hex" : "#AC1071",
        "number" : 917,
    },
    "Red Copper - Dark" : {
        "hex" : "#883630",
        "number" : 918,
    },
    "Red Copper" : {
        "hex" : "#9B371B",
        "number" : 919,
    },
    "Copper - Medium" : {
        "hex" : "#AB4836",
        "number" : 920,
    },
    "Copper" : {
        "hex" : "#C0573D",
        "number" : 921,
    },
    "Copper - Light" : {
        "hex" : "#DD6E4C",
        "number" : 922,
    },
    "Gray Green - Very Dark" : {
        "hex" : "#384A4A",
        "number" : 924,
    },
    "Grey Green - Medium" : {
        "hex" : "#617674",
        "number" : 926,
    },
    "Grey Green - Light" : {
        "hex" : "#9FA8A5",
        "number" : 927,
    },
    "Grey Green - Very Light" : {
        "hex" : "#C0C6C0",
        "number" : 928,
    },
    "Antique Blue - Dark" : {
        "hex" : "#495C6B",
        "number" : 930,
    },
    "Antique Blue - Medium" : {
        "hex" : "#667684",
        "number" : 931,
    },
    "Antique Blue - Light" : {
        "hex" : "#93A0AF",
        "number" : 932,
    },
    "Avocado Green - BLACK" : {
        "hex" : "#323324",
        "number" : 934,
    },
    "Avocado Green - Dark" : {
        "hex" : "#383A2A",
        "number" : 935,
    },
    "Avocado Green - Very Dark" : {
        "hex" : "#3F4227",
        "number" : 936,
    },
    "Avocado Green - Medium" : {
        "hex" : "#434F2C",
        "number" : 937,
    },
    "Coffee Brown - Ultra Dark" : {
        "hex" : "#45271A",
        "number" : 938,
    },
    "Blue - Very Dark" : {
        "hex" : "#09092F",
        "number" : 939,
    },
    "Aquamarine - Medium" : {
        "hex" : "#009A77",
        "number" : 943,
    },
    "Tawny" : {
        "hex" : "#F6C19A",
        "number" : 945,
    },
    "Burnt Orange - Medium" : {
        "hex" : "#ED4115",
        "number" : 946,
    },
    "Burnt Orange" : {
        "hex" : "#FC4F16",
        "number" : 947,
    },
    "Peach - Very Light" : {
        "hex" : "#FDE6D3",
        "number" : 948,
    },
    "Desert Sand - Light" : {
        "hex" : "#E5AC8D",
        "number" : 950,
    },
    "Tawny - Light" : {
        "hex" : "#FADDB6",
        "number" : 951,
    },
    "Nile Green" : {
        "hex" : "#6FDA8A",
        "number" : 954,
    },
    "Nile Green - Light" : {
        "hex" : "#A8EBAD",
        "number" : 955,
    },
    "Geranium" : {
        "hex" : "#F7566D",
        "number" : 956,
    },
    "Geranium - Pale" : {
        "hex" : "#FD99AF",
        "number" : 957,
    },
    "Seagreen - Dark" : {
        "hex" : "#0DB294",
        "number" : 958,
    },
    "Seagreen - Medium" : {
        "hex" : "#72D0B7",
        "number" : 959, 
    },
    "Dusty Rose - Dark" : {
        "hex" : "#DE586C",
        "number" : 961,
    },
    "Dusty Rose - Medium" : {
        "hex" : "#EB7183",
        "number" : 962,
    },
    "Dusty Rose - Ultra Very Light" : {
        "hex" : "#FDCCD1",
        "number" : 963,
    },
    "Seagreen - Light" : {
        "hex" : "#A5E4D4",
        "number" : 964,
    },
    "Baby Green - Medium" : {
        "hex" : "#94D28A",
        "number" : 966,
    },
    "Peach - Light" : {
        "hex" : "#FFC2AC",
        "number" : 967,
    },
    "Pumpkin - Light" : {
        "hex" : "#FB6721",
        "number" : 970,
    },
    "Pumpkin" : {
        "hex" : "#FC670D",
        "number" : 971,
    },
    "Canary - Deep" : {
        "hex" : "#FB9F11",
        "number" : 972,
    },
    "Canary - Bright" : {
        "hex" : "#FCCD2D",
        "number" : 973,
    },
    "Golden Brown - Dark" : {
        "hex" : "#813C11",
        "number" : 975,
    },
    "Golden Brown - Medium" : {
        "hex" : "#CF7532",
        "number" : 976,
    },
    "Golden Brown - Light" : {
        "hex" : "#EC8F43",
        "number" : 977,
    },
    "Forest Green - Very Dark" : {
        "hex" : "#2E5230",
        "number" : 986,
    },
    "Forest Green - Dark" : {
        "hex" : "#436838",
        "number" : 987,
    },
    "Forest Green - Medium" : {
        "hex" : "#66924A",
        "number" : 988,
    },
    "Forest Green" : {
        "hex" : "#71A74E",
        "number" : 989,
    },
    "Aquamarine - Dark" : {
        "hex" : "#135F55",
        "number" : 991,
    },
    "Aquamarine - Light" : {
        "hex" : "#42B59E",
        "number" : 992,
    },
    "Aquamarine - Very Light" : {
        "hex" : "#62D8B6",
        "number" : 993,
    },
    "Electric Blue - Dark" : {
        "hex" : "#0061B0",
        "number" : 995,
    },
    "Electric Blue - Medium" : {
        "hex" : "#49A8EB",
        "number" : 996,
    },
    "Khaki Green - Dark" : {
        "hex" : "#655935",
        "number" : 3011,
    },
    "Khaki Green - Medium" : {
        "hex" : "#8B7B4E",
        "number" : 3012,
    },
    "Khaki Green - Light" : {
        "hex" : "#AFA97B",
        "number" : 3013,
    },
    "Brown Gray - Very Dark" : {
        "hex" : "#50403B",
        "number" : 3021,
    },
    "Brown Gray - Medium" : {
        "hex" : "#848274",
        "number" : 3022,
    },
    "Brown Gray - Light" : {
        "hex" : "#A29B86",
        "number" : 3023,
    },
    "Brown Gray - Very Light" : {
        "hex" : "#BEB8AC",
        "number" : 3024,
    },
    "Mocha Brown - Very Dark" : {
        "hex" : "#423014",
        "number" : 3031,
    },
    "Mocha Brown - Medium" : {
        "hex" : "#9D8868",
        "number" : 3032,
    },
    "Mocha Brown - Very Light" : {
        "hex" : "#DBC7AD",
        "number" : 3033,
    },
    "Antique Violet - Medium" : {
        "hex" : "#866A76", 
        "number" : 3041,
    },
    "Antique Violet - Light" : {
        "hex" : "#AF98A0",
        "number" : 3042,
    },
    "Yellow Beige - Dark" : {
        "hex" : "#AF8152",
        "number" : 3045,
    },
    "Yellow Beige - Medium" : {
        "hex" : "#CEB074",
        "number" : 3046,
    },
    "Yellow Beige - Light" : {
        "hex" : "#EAD8AB",
        "number" : 3047,
    },
    "Green Gray - Dark" : {
        "hex" : "#4C4C1E",
        "number" : 3051,
    },
    "Green Gray - Medium" : {
        "hex" : "#787E5C",
        "number" : 3052,
    },
    "Green Gray" : {
        "hex" : "#999D75",
        "number" : 3053,
    },
    "Desert Sand" : {
        "hex" : "#BA7056",
        "number" : 3064,
    },
    "Beaver Gray - Very Light" : {
        "hex" : "#D2D2CA",
        "number" : 3072,
    },
    "Golden Yellow - Very Light" : {
        "hex" : "#FCF6B6",
        "number" : 3078,
    },
    "Baby Blue - Light" : {
        "hex" : "#ADCDE7",
        "number" : 3325,
    },
    "Rose - Light" : {
        "hex" : "#F9979C",
        "number" : 3326,
    },
    "Salmon - Dark" : {
        "hex" : "#BE444A",
        "number" : 3328,
    },
    "Apricot - Medium" : {
        "hex" : "#FD6B4F",
        "number" : 3340,
    },
    "Apricot" : {
        "hex" : "#FD8E78",
        "number" : 3341,
    },
    "Hunter Green - Dark" : {
        "hex" : "#40552E",
        "number" : 3345,
    },
    "Hunter Green" : {
        "hex" : "#56743B",
        "number" : 3346,
    },
    "Yellow Green - Medium" : {
        "hex" : "#6D9646",
        "number" : 3347,
    },
    "Yellow Green - Light" : {
        "hex" : "#BEDF74",
        "number" : 3348,
    },
    "Dusty Rose - Ultra Dark" : {
        "hex" : "#AA3949",
        "number" : 3350,
    },
    "Dusty Rose - Light" : {
        "hex" : "#EFA5AC",
        "number" : 3354,
    },
    "Pine Green - Dark" : {
        "hex" : "#49523C",
        "number" : 3362,
    },
    "Pine Green - Medium" : {
        "hex" : "#617451",
        "number" : 3364,
    },
    "Pine Green" : {
        "hex" : "#8E9B6D",
        "number" : 3364,
    },
    "Black Brown" : {
        "hex" : "#36220E",
        "number" : 3371,
    },
    "Plum - Light" : {
        "hex" : "#D94C9D",
        "number" : 3607,
    },
    "Plum - Very Light" : {
        "hex" : "#EC81BE",
        "number" : 3608,
    },
    "Plum - Ultra Light" : {
        "hex" : "#F6B0DF",
        "number" : 3609,
    },
    "Mauve - Very Dark" : {
        "hex" : "#79263B",
        "number" : 3685,
    },
}; 
export default threadColorsByName;