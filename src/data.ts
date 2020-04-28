type Item = {
    id: string
    name: string
}

type Transaction = {
    id: string
    items: Item[]
}

export const transactions: Transaction[] = [
    {
        id: "0001",
        items: [
            {
                id: "0001",
                name: "item1"
            },
            {
                id: "0005",
                name: "item5"
            },
            {
                id: "0007",
                name: "item7"
            },
            {
                id: "0016",
                name: "item16"
            },
            {
                id: "0022",
                name: "item22"
            }
        ]
    },
    {
        id: "0002",
        items: [
            {
                id: "0005",
                name: "item5"
            },
            {
                id: "0008",
                name: "item8"
            },
            {
                id: "00010",
                name: "item10"
            },
            {
                id: "0020",
                name: "item20"
            }
        ]
    },
    {
        id: "0003",
        items: [
            {
                id: "0005",
                name: "item5"
            },
            {
                id: "0008",
                name: "item8"
            },
            {
                id: "00010",
                name: "item10"
            },
            {
                id: "0020",
                name: "item20"
            }
        ]
    },
    {
        id: "0004",
        items: [
            {
                id: "0002",
                name: "item2"
            },
            {
                id: "0008",
                name: "item8"
            }
        ]
    },
    {
        id: "0005",
        items: [
            {
                id: "0003",
                name: "item3"
            },
            {
                id: "0006",
                name: "item6"
            },
            {
                id: "00010",
                name: "item10"
            },
            {
                id: "00015",
                name: "item15"
            },
            {
                id: "00017",
                name: "item17"
            },
            {
                id: "00021",
                name: "item21"
            },
            {
                id: "0022",
                name: "item22"
            }
        ]
    },
    {
        id: "0006",
        items: [
            {
                id: "0001",
                name: "item1"
            },
            {
                id: "0009",
                name: "item9"
            },
            {
                id: "0011",
                name: "item11"
            }
        ]
    },
    {
        id: "0007",
        items: [
            {
                id: "0004",
                name: "item4"
            }
        ]
    },
    {
        id: "0008",
        items: [
            {
                id: "0012",
                name: "item12"
            },
            {
                id: "0018",
                name: "item18"
            }
        ]
    },
    {
        id: "0009",
        items: [
            {
                id: "0002",
                name: "item12"
            },
            {
                id: "0013",
                name: "item13"
            }
        ]
    },
    {
        id: "0010",
        items: [
            {
                id: "0007",
                name: "item7"
            },
            {
                id: "0009",
                name: "item9"
            },
            {
                id: "0019",
                name: "item19"
            }
        ]
    }
]
