var mapObjList = [
	{//level-1(map)
		data: {
			title: "map",
			mapX: 19,
			mapY: 19,
		},
		rule: {

		},
		objlevel: {
			ice: 21,
			door: 22,
			water: 23,
			dog: 24,
			key: 25,
			wall: 26,
			snails: 27,
		},
		text: [
			[1, 1, "wall"], [2, 1, "is"], [3, 1, "stop"],
			[1, 2, "level"], [2, 2, "is"], [3, 2, "trans"],

			[8, 1, "door"], [9, 1, "is"], [10, 1, "shut"], [11, 1, "and"], [12, 1, "stop"],

			[4, 7, "key"], [5, 7, "is"], [6, 7, "push"], [7, 7, "and"], [8, 7, "open"],

			[1, 10, "snails"], [2, 10, "is"], [3, 10, "you"],

			[11, 7, "water"], [12, 7, "is"], [13, 7, "sink"],

			[4, 11, "ice"], [5, 11, "is"], [6, 11, "stop"],

			[15, 1, "ice"], [16, 1, "is"], [17, 2, "fall"],

			[15, 8, "water"], [16, 8, "is"], [17, 8, "melt"],

			[4, 15, "is"], [5, 15, "hot"],

			[1, 15, "dog"], [1, 16, "is"], [1, 17, "defeat"],

			[11, 12, "text", -1, 2], [12, 12, "is"], [13, 12, "weak"],
			[11, 13, "text", -1, 1],

			[15, 17, "text"], [16, 17, "is"], [17, 17, "push"],
		],
		level: [
			[2, 9, null, 0],
			[1, 6, null, 1],
			[8, 3, null, 2],
			[7, 1, null, 3],
			[12, 4, null, 4],
			[13, 1, null, 5],
			[11, 10, null, 6],
			[13, 10, null, 7],
			[15, 2, null, 8],
			[15, 7, null, 9],
			[17, 7, null, 10],
			[7, 14, null, 11],
			[9, 14, null, 12],
			[1, 12, null, 13],
			[1, 14, null, 14],
			[5, 16, null, 15],
			[7, 16, null, 16],
			[16, 13, null, 17],
			[16, 11, null, 18],
			[8, 14, null, 19],
			[16, 16, null, 20],
		],
		snails: [
			[2, 5],
		],
		dog: [
			[2, 15], [3, 15],
		],
		water: [
			[11, 8], [12, 8], [13, 8],
		],
		wall: [
			[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0], [18, 0],
			[0, 1], [4, 1], [14, 1], [18, 1],
			[0, 2], [8, 2], [9, 2], [10, 2], [14, 2], [18, 2],
			[0, 3], [2, 3], [3, 3], [4, 3], [10, 3], [18, 3],
			[0, 4], [4, 4], [10, 4], [14, 4], [15, 4], [16, 4], [18, 4],
			[0, 5], [14, 5], [18, 5],
			[0, 6], [4, 6], [10, 6], [14, 6], [18, 6],
			[0, 7], [1, 7], [3, 7], [10, 7], [14, 7], [18, 7],
			[0, 8], [4, 8], [10, 8], [14, 8], [18, 8],
			[0, 9], [4, 9], [10, 9], [14, 9], [15, 9], [16, 9], [17, 9], [18, 9],
			[0, 10], [4, 10], [5, 10], [6, 10], [7, 10], [10, 10], [14, 10], [18, 10],
			[0, 11], [1, 11], [2, 11], [3, 11], [7, 11], [10, 11], [11, 11], [12, 11], [13, 11], [14, 11], [18, 11],
			[0, 12], [5, 12], [6, 12], [10, 12], [14, 12], [18, 12],
			[0, 13], [10, 13], [18, 13],
			[0, 14], [4, 14], [5, 14], [6, 14], [10, 14], [18, 14],
			[0, 15], [6, 15], [7, 15], [8, 15], [10, 15], [13, 15], [14, 15], [15, 15], [16, 15], [17, 15], [18, 15],
			[0, 16], [8, 16], [9, 16], [10, 16], [13, 16], [14, 16], [18, 16],
			[0, 17], [13, 17], [14, 17], [18, 17],
			[0, 18], [1, 18], [2, 18], [3, 18], [4, 18], [5, 18], [6, 18], [7, 18], [8, 18], [9, 18], [10, 18], [11, 18], [12, 18], [13, 18], [14, 18], [15, 18], [16, 18], [17, 18], [18, 18],
		],
		ice: [
			[8, 10], [9, 10],
			[13, 13],
			[13, 14],
		],
		door: [
			[10, 5],
			[14, 3],
			[17, 4],
			[6, 13],
		],
		stone: [
		],
		key: [
			[7, 8],
		],
	},
	{//level0
		data: {
			title: "Ryo Is You",
			mapX: 11,
			mapY: 11,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[0, 1, "snails"],
			[1, 1, "is"],
			[2, 1, "you"],

			[8, 1, "flag"],
			[9, 1, "is"],
			[10, 1, "win"],

			[0, 9, "wall"],
			[1, 9, "is"],
			[2, 9, "stop"],

			[8, 9, "stone"],
			[9, 9, "is"],
			[10, 9, "push"],
		],
		snails: [
			[1, 5],
		],
		flag: [
			[9, 5],
		],
		stone: [
			[5, 4],
			[5, 5],
			[5, 6],
		],
		wall: [
			[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3],

			[0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7],
		],
	},
	{//level1
		data: {
			title: "基本の基本",
			mapX: 23,
			mapY: 17,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[7, 12, "snails"],
			[7, 13, "is"],
			[7, 14, "you"],

			[8, 8, "flag"],
			[12, 4, "is"],
			[15, 6, "win"],

			[12, 12, "wall"],
			[12, 13, "is"],
			[12, 14, "stop"],
		],
		snails: [
			[15, 13],
		],
		wall: [
			[10, 2], [11, 2], [12, 2], [13, 2], [14, 2], [15, 2], [16, 2], [17, 2],
			[10, 3], [17, 3],
			[10, 4], [17, 4],
			[10, 5], [17, 5],
			[6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [17, 6],
			[6, 7], [17, 7],
			[6, 8], [17, 8],
			[6, 9], [17, 9],
			[6, 10], [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10], [13, 10], [14, 10], [15, 10], [16, 10], [17, 10],
			[10, 11], [17, 11],
			[10, 12], [17, 12],
			[10, 13], [17, 13],
			[10, 14], [17, 14],
			[10, 15], [17, 15],
			[10, 16], [11, 16], [12, 16], [13, 16], [14, 16], [15, 16], [16, 16], [17, 16],
		],
		flag: [
			[12, 8],
		],
	},
	{//level2
		data: {
			title: "深い水",
			mapX: 21,
			mapY: 15,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[0, 0, "snails"],
			[0, 1, "is"],
			[0, 2, "you"],
			[1, 0, "wall"],
			[1, 1, "is"],
			[1, 2, "stop"],

			[6, 4, "water"],
			[6, 5, "is"],
			[6, 6, "sink"],

			[13, 9, "stone"],
			[14, 9, "is"],
			[15, 9, "push"],

			[13, 12, "flag"],
			[14, 12, "is"],
			[15, 12, "win"],
		],
		snails: [
			[9, 3],
		],
		water: [
			[8, 7], [9, 7], [10, 7],

			[5, 11], [6, 11], [7, 11],
			[5, 12], [6, 12], [7, 12],
			[6, 13], [7, 13],
		],
		wall: [
			[2, 0],
			[2, 1],
			[2, 2],
			[0, 3], [1, 3], [2, 3],

			[7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1],
			[7, 2], [14, 2],
			[7, 3], [14, 3],
			[7, 4], [14, 4],
			[7, 5], [14, 5],
			[7, 6], [14, 6],
			[4, 7], [5, 7], [6, 7], [7, 7], [11, 7], [12, 7], [13, 7], [14, 7], [15, 7], [16, 7], [17, 7],
			[4, 8], [11, 8], [17, 8],
			[4, 9], [11, 9], [17, 9],
			[4, 10], [11, 10], [17, 10],
			[4, 11], [9, 11], [17, 11],
			[4, 12], [11, 12], [17, 12],
			[4, 13], [11, 13], [17, 13],
			[4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14], [10, 14], [11, 14], [12, 14], [13, 14], [14, 14], [15, 14], [16, 14], [17, 14],
		],
		stone: [
			[12, 3], [12, 5],
		],
		flag: [
			[5, 13],
		],
	},
	{//level3
		data: {
			title: "施錠確認",
			mapX: 27,
			mapY: 16,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[6, 2, "snails"],
			[7, 2, "is"],
			[8, 2, "you"],
			[6, 4, "wall"],
			[7, 4, "is"],
			[8, 4, "stop"],

			[18, 2, "door"],
			[19, 2, "is"],
			[20, 2, "stop"],
			[18, 4, "door"],
			[19, 4, "is"],
			[20, 4, "shut"],

			[18, 13, "flag"],
			[19, 13, "is"],
			[20, 13, "win"],

			[9, 11, "key"], [10, 11, "is"], [11, 11, "open"],
			[9, 12, "is"],
			[9, 13, "push"],

			[19, 7, "stone"],
		],
		snails: [
			[9, 7],
		],
		wall: [
			[5, 1], [6, 1], [7, 1], [8, 1], [9, 1],
			[5, 2], [9, 2],
			[5, 3], [6, 3], [7, 3], [8, 3], [9, 3],
			[5, 4], [9, 4],
			[5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5],
			[5, 6], [11, 6],
			[5, 7],
			[5, 8], [11, 8],
			[5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [10, 9], [11, 9],

			[17, 1], [18, 1], [19, 1], [20, 1], [21, 1],
			[17, 2], [21, 2],
			[17, 3], [18, 3], [19, 3], [20, 3], [21, 3],
			[17, 4], [21, 4],
			[16, 5], [17, 5], [18, 5], [19, 5], [20, 5], [21, 5], [22, 5],
			[16, 6], [22, 6],
			[22, 7],
			[16, 8], [22, 8],
			[16, 9], [17, 9], [18, 9], [20, 9], [21, 9], [22, 9],
			[16, 10], [21, 10],
			[16, 11], [21, 11],
			[16, 12], [17, 12], [21, 12],
			[17, 13], [21, 13],
			[17, 14], [18, 14], [19, 14], [20, 14], [21, 14],
		],
		door: [
			[11, 7], [16, 7], [19, 9],
		],
		stone: [
			[13, 7],
		],
		key: [
			[7, 7], [14, 7],
		],
		flag: [
			[19, 11],
		],
	},
	{//level4
		data: {
			title: "あなたは何?",
			mapX: 15,
			mapY: 8,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[4, 1, "stone"],
			[5, 1, "is"],
			[6, 1, "push"],

			[2, 2, "snails"],
			[3, 2, "is"],
			[4, 2, "you"],

			[11, 1, "dog"],
			[12, 2, "is"],
			[12, 3, "defeat"],
			[12, 1, "flag"],
			[13, 2, "is"],
			[13, 3, "win"],

			[0, 7, "wall"],
			[1, 7, "is"],
			[2, 7, "stop"],
		],
		snails: [
			[1, 4],
		],
		dog: [
			[4, 6], [5, 6],
		],
		wall: [
			[8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0],
			[14, 1],
			[11, 2], [14, 2],
			[11, 3], [14, 3],
			[11, 4], [12, 4], [13, 4], [14, 4],
			[14, 5],
			[14, 6],
			[14, 7],

			[8, 2],
			[8, 3],
			[4, 4], [5, 4], [6, 4], [7, 4], [8, 4],
			[4, 5], [8, 5],
			[8, 6],
			[3, 7], [4, 7], [8, 7],
		],
		stone: [
			[10, 1],
		],
		flag: [
			[6, 6],
		],
	},
	{//level5
		data: {
			title: "微小な浮遊量",
			mapX: 23,
			mapY: 15,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[0, 0, "snails"],
			[1, 0, "is"],
			[2, 0, "float"],

			[11, 4, "snails"],
			[12, 4, "is"],
			[13, 4, "you"],

			[0, 1, "flag"],
			[1, 1, "is"],
			[2, 1, "win"],

			[7, 10, "wall"],
			[8, 10, "is"],
			[9, 10, "stop"],

			[15, 10, "stone"],
			[16, 10, "is"],
			[17, 10, "push"],
		],
		snails: [
			[8, 7],
		],
		wall: [
			[7, 5], [8, 5], [9, 5], [10, 5], [11, 5], [12, 5], [13, 5], [14, 5], [15, 5], [16, 5], [17, 5],
			[7, 9], [8, 9], [9, 9], [10, 9], [11, 9], [12, 9], [13, 9], [14, 9], [15, 9], [16, 9], [17, 9],
		],
		stone: [
			[12, 6], [12, 7], [12, 8],
		],
		flag: [
			[16, 7],
		],
	},
	{//level6
		data: {
			title: "う、動く!",
			mapX: 23,
			mapY: 15,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[8, 2, "stone"],
			[9, 2, "is"],
			[10, 2, "defeat"],

			[4, 4, "water"],
			[4, 5, "is"],
			[4, 6, "hot"],

			[2, 5, "snails"],
			[2, 6, "is"],
			[2, 7, "you"],

			[15, 5, "dog"],
			[16, 5, "is"],
			[17, 5, "push"],
			[16, 6, "move"],

			[21, 5, "dog"],
			[21, 6, "is"],
			[21, 7, "melt"],

			[11, 6, "defeat"],

			[8, 9, "wall"],
			[9, 9, "is"],
			[10, 9, "stop"],

			[11, 11, "win"],
		],
		snails: [
			[15, 9],
		],
		dog: [
			[17, 9],
		],
		water: [
			[6, 4], [6, 6], [5, 7],
		],
		wall: [
			[11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1], [20, 1],
			[11, 2], [20, 2],
			[2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [20, 3],
			[2, 4], [20, 4],
			[0, 5], [1, 5], [3, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5], [20, 5],
			[20, 6],
			[0, 7], [1, 7], [3, 7], [4, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7], [11, 7], [20, 7],
			[4, 8], [6, 8], [11, 8], [20, 8],
			[4, 9], [6, 9], [11, 9], [20, 9],
			[4, 10], [6, 10], [9, 10], [10, 10], [11, 10], [12, 10], [20, 10],
			[4, 11], [6, 11], [7, 11], [8, 11], [9, 11], [14, 11], [20, 11],
			[4, 12], [11, 12], [14, 12], [15, 12], [16, 12], [17, 12], [18, 12], [19, 12], [20, 12],
			[4, 13], [5, 13], [6, 13], [7, 13], [8, 13], [9, 13], [10, 13], [11, 13], [12, 13], [13, 13], [14, 13],
		],
		stone: [
			[11, 4],
		],
	},
	{//level7
		data: {
			title: "○○と○○",
			mapX: 23,
			mapY: 14,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[8, 4, "snails"],
			[8, 5, "is"],
			[8, 6, "you"],
			[8, 7, "and"],
			[8, 8, "open"],

			[2, 9, "flag"],
			[4, 9, "key"],

			[11, 7, "win"],

			[18, 13, "water"],
			[19, 13, "is"],
			[20, 13, "stop"],
			[21, 13, "and"],
			[22, 13, "shut"],
		],
		snails: [
			[8, 10],
		],
		water: [
			[9, 5], [10, 5], [11, 5], [12, 5], [13, 5],
			[9, 6], [10, 6], [13, 6],
			[9, 7], [13, 7],
			[9, 8], [11, 8], [12, 8], [13, 8],

			[17, 12], [18, 12], [19, 12], [20, 12], [21, 12], [22, 12],
			[17, 13],
		],
		key: [
			[4, 10],
		],
		flag: [
			[2, 10],
		],
	},
	{//level8
		data: {
			title: "水を挟んで",
			mapX: 14,
			mapY: 8,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[0, 0, "snails"],
			[1, 0, "is"],
			[2, 0, "you"],

			[1, 1, "flag"],
			[0, 2, "is"],
			[0, 3, "win"],

			[3, 3, "water"],
			[3, 4, "is"],
			[3, 5, "sink"],

			[0, 7, "wall"],
			[1, 7, "is"],
			[2, 7, "stop"],

			[9, 0, "stone"],
			[10, 0, "is"],
			[11, 0, "push"],
			[12, 0, "and"],
			[13, 0, "melt"],

			[13, 1, "dog"],
			[13, 2, "is"],
			[13, 3, "defeat"],

			[11, 7, "water"],
			[12, 7, "is"],
			[13, 7, "hot"],
		],
		snails: [
			[5, 5],
		],
		dog: [
			[2, 1], [3, 1], [4, 1],
		],
		water: [
			[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7],
		],
		wall: [
			[0, 4], [8, 0],
		],
		stone: [
			[9, 2],
		],
		flag: [
			[9, 5],
		],
	},
	{//level9
		data: {
			title: "も、脆い!",
			mapX: 16,
			mapY: 15,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[4, 0, "wall"],
			[5, 0, "is"],
			[6, 0, "stop"],

			[7, 4, "snails"], [8, 4, "is"], [9, 4, "you"],
			[7, 5, "is"],
			[7, 6, "weak"],

			[12, 2, "dog"],
			[13, 2, "is"],
			[14, 2, "defeat"],

			[8, 9, "stone"],
			[9, 9, "is"],
			[10, 9, "push"],

			[1, 11, "flag"],
			[2, 11, "is"],
			[3, 11, "win"],
		],
		snails: [
			[3, 4],
		],
		dog: [
			[12, 7], [13, 7], [14, 7],
			[12, 8], [13, 8], [14, 8],
		],
		wall: [
			[3, 0],
			[3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 1],
			[15, 2],
			[15, 3],
			[15, 4],
			[15, 5],
			[15, 6],
			[0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [11, 7], [15, 7],
			[5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8], [15, 8],
			[7, 9], [15, 9],
			[7, 10], [15, 10],
			[7, 11], [15, 11],
			[5, 12], [15, 12],
			[7, 13], [15, 13],
			[7, 14], [8, 14], [9, 14], [10, 14], [11, 14], [12, 14], [13, 14], [14, 14], [15, 14],
		],
		stone: [
			[13, 5],
			[7, 12],
		],
		flag: [
			[2, 13],
		],
	},
	{//level10
		data: {
			title: "持つ者持たざる者",
			mapX: 27,
			mapY: 16,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[0, 0, "wall"],
			[1, 0, "is"],
			[2, 0, "stop"],
			[0, 2, "water"],
			[1, 2, "is"],
			[2, 2, "sink"],
			[0, 4, "flag"],
			[1, 4, "is"],
			[2, 4, "win"],

			[4, 0, "stone"],
			[5, 0, "is"],
			[6, 0, "push"],

			[9, 2, "snails"],
			[10, 2, "has"],
			[11, 2, "stone"],

			[10, 4, "is"],
			[10, 5, "move"],

			[0, 15, "dog"],
			[1, 15, "is"],
			[2, 15, "you"],
		],
		snails: [
			[8, 9, "right"],
		],
		dog: [
			[10, 13],
		],
		water: [
			[17, 5], [18, 5], [19, 5], [20, 5], [21, 5], [22, 5], [23, 5], [24, 5], [25, 5],
			[17, 6], [18, 6], [19, 6], [20, 6], [21, 6], [22, 6], [23, 6], [24, 6], [25, 6],
			[17, 7], [18, 7], [19, 7], [20, 7], [21, 7], [22, 7], [23, 7], [24, 7], [25, 7],
			[17, 8], [18, 8], [19, 8], [23, 8], [24, 8], [25, 8],
			[17, 9], [18, 9], [19, 9], [23, 9], [24, 9], [25, 9],
			[17, 10], [18, 10], [19, 10], [23, 10], [24, 10], [25, 10],
			[17, 11], [18, 11], [19, 11], [20, 11], [21, 11], [22, 11], [23, 11], [24, 11], [25, 11],
			[17, 12], [18, 12], [19, 12], [20, 12], [21, 12], [22, 12], [23, 12], [24, 12], [25, 12],
			[17, 13], [18, 13], [19, 13], [20, 13], [21, 13], [22, 13], [23, 13], [24, 13], [25, 13],
		],
		wall: [
			[3, 0], [14, 0],
			[0, 1], [1, 1], [2, 1], [3, 1], [14, 1],
			[3, 2], [14, 2],
			[0, 3], [1, 3], [2, 3], [3, 3], [14, 3],
			[3, 4], [14, 4],
			[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [14, 5],
			[8, 6], [12, 6],
			[6, 7], [7, 7], [8, 7], [9, 7], [10, 7], [11, 7], [12, 7], [13, 7], [14, 7],

			[0, 14], [1, 14], [2, 14], [3, 14],
			[3, 15],
		],
		flag: [
			[21, 9],
		],
	},
	{//level11
		data: {
			title: "多重人格",
			mapX: 26,
			mapY: 14,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[12, 0, "water"],
			[13, 0, "is"],
			[14, 0, "defeat"],

			[22, 2, "flag"],
			[23, 2, "is"],
			[24, 2, "win"],

			[6, 3, "dog"],
			[10, 3, "has"],
			[6, 10, "move"],
			[10, 10, "is"],

			[8, 5, "snails"],
			[8, 6, "is"],
			[8, 7, "you"],

			[18, 7, "door"],
			[19, 7, "is"],
			[20, 7, "shut"],

			[18, 9, "door"],
			[19, 9, "and"],
			[20, 9, "wall"],
			[21, 9, "is"],
			[22, 9, "stop"],

			[18, 11, "dog"],
			[19, 11, "is"],
			[20, 11, "open"],
		],
		snails: [
			[8, 12],
		],
		dog: [
			[8, 8],
		],
		water: [
			[12, 2], [12, 3], [12, 4], [12, 5], [12, 6], [12, 7], [12, 8], [12, 9], [12, 10], [12, 11], [12, 12], [12, 13],
			[13, 2], [13, 3], [13, 4], [13, 5], [13, 6], [13, 7], [13, 8], [13, 9], [13, 10], [13, 11], [13, 12], [13, 13],

			[20, 2], [20, 3], [20, 4], [20, 5],
		],
		wall: [
			[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1], [20, 1], [21, 1], [22, 1], [23, 1], [24, 1], [25, 1],
			[17, 2], [25, 2],
			[17, 3], [25, 3],
			[17, 4], [25, 4],
			[25, 5],
			[17, 6], [18, 6], [19, 6], [20, 6], [21, 6], [22, 6], [23, 6], [24, 6], [25, 6],
			[17, 7], [21, 7], [22, 7], [23, 7], [24, 7], [25, 7],
			[17, 8], [18, 8], [19, 8], [20, 8], [21, 8], [22, 8], [23, 8], [24, 8], [25, 8],
			[17, 9], [23, 9], [24, 9], [25, 9],
			[17, 10], [18, 10], [19, 10], [20, 10], [21, 10], [22, 10], [23, 10], [24, 10], [25, 10],
			[17, 11], [21, 11], [22, 11], [23, 11], [24, 11], [25, 11],
			[17, 12], [18, 12], [19, 12], [20, 12], [21, 12], [22, 12], [23, 12], [24, 12], [25, 12],
			[17, 13], [18, 13], [19, 13], [20, 13], [21, 13], [22, 13], [23, 13], [24, 13], [25, 13],
		],
		door: [
			[17, 5],
		],
		flag: [
			[23, 3],
		],
	},
	{//level12
		data: {
			title: "これまでのおさらい",
			mapX: 24,
			mapY: 16,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[0, 0, "text"],
			[1, 0, "is"],
			[2, 0, "defeat"],

			[15, 4, "water"],
			[16, 4, "is"],
			[17, 4, "defeat"],

			[4, 7, "stone"],
			[5, 7, "is"],
			[6, 7, "defeat"],
			[7, 7, "and"],
			[8, 7, "melt"],

			[17, 8, "dog"],
			[18, 9, "text"],
			[19, 8, "hot"],
			[20, 9, "push"],

			[13, 10, "is"],
			[13, 11, "weak"],

			[18, 12, "snails"],
			[19, 12, "is"],
			[20, 12, "you"],

			[6, 12, "flag"],
			[7, 13, "is"],
			[8, 13, "win"],

			[15, 14, "wall"],
			[16, 14, "is"],
			[17, 14, "stop"],
		],
		snails: [
			[15, 8],
		],
		dog: [
			[8, 10],
		],
		water: [
			[12, 7], [6, 11],
		],
		wall: [
			[6, 2], [7, 2], [8, 2], [9, 2], [10, 2],
			[5, 3], [6, 3], [10, 3], [11, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 3],
			[5, 4], [11, 4], [12, 4], [13, 4], [14, 4], [19, 4], [20, 4], [21, 4],
			[5, 5], [6, 5], [12, 5], [13, 5], [21, 5], [22, 5],
			[6, 6], [7, 6], [8, 6], [9, 6], [12, 6], [15, 6], [22, 6], [23, 6],
			[9, 7], [23, 7],
			[6, 8], [7, 8], [8, 8], [9, 8], [11, 8], [23, 8],
			[5, 9], [6, 9], [9, 9], [10, 9], [11, 9], [23, 9],
			[4, 10], [5, 10], [11, 10], [12, 10], [23, 10],
			[4, 11], [11, 11], [12, 11], [23, 11],
			[4, 12], [5, 12], [10, 12], [11, 12], [12, 12], [13, 12], [21, 12], [22, 12], [23, 12],
			[5, 13], [9, 13], [10, 13], [13, 13], [14, 13], [15, 13], [16, 13], [17, 13], [18, 13], [19, 13], [20, 13], [21, 13],
			[5, 14], [6, 14], [7, 14], [8, 14], [9, 14],
		],
		stone: [
			[11, 7],
		],
		flag: [
			[8, 4],
		],
	},
	{//level13
		data: {
			title: "不法投棄",
			mapX: 21,
			mapY: 16,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[4, 0, "key"],
			[5, 0, "is"],
			[6, 0, "sink"],

			[0, 2, "water"],
			[1, 2, "is"],
			[2, 2, "sink"],

			[0, 4, "text"],
			[0, 5, "is"],
			[0, 6, "defeat"],

			[9, 1, "flag"],
			[12, 2, "is"],
			[13, 2, "win"],

			[15, 2, "key"],
			[16, 2, "has"],
			[17, 2, "wall"],

			[9, 5, "dog"],
			[9, 6, "has"],
			[9, 7, "text"],

			[4, 7, "snails"],
			[5, 7, "is"],
			[6, 7, "you"],

			[18, 11, "is"],
			[18, 12, "float"],

			[10, 15, "stone"],
			[11, 15, "and"],
			[12, 15, "wall"],
			[13, 15, "is"],
			[14, 15, "stop"],
		],
		snails: [
			[12, 6],
		],
		water: [
			[4, 2], [5, 2], [6, 2],
			[4, 3], [5, 3], [6, 3],

			[18, 10],
		],
		wall: [
			[1, 3], [2, 3], [3, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [12, 3], [13, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 3],
			[1, 4], [19, 4],
			[1, 5], [19, 5],
			[1, 6], [19, 6],
			[1, 7], [19, 7],
			[1, 8],
			[1, 9],
			[1, 10],
			[1, 11],
			[1, 12],
			[1, 13],
			[1, 14], [2, 14], [3, 14], [4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14], [10, 14], [11, 14], [12, 14],
		],
		stone: [
			[7, 0], [10, 0],
			[3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1],
			[3, 2], [14, 2],

			[13, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8],
			[13, 9], [19, 9],
			[19, 10],
			[13, 11], [19, 11],
			[13, 12], [19, 12], [20, 12],
			[13, 13], [20, 13],
			[13, 14], [14, 14], [15, 14], [16, 14], [17, 14], [18, 14], [19, 14], [20, 14],
		],
		key: [
			[8, 2],
		],
		flag: [
			[9, 11],
		],
	},
	{//level14
		data: {
			title: "高所恐怖症",
			mapX: 23,
			mapY: 16,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[0, 0, "key"],
			[1, 0, "is"],
			[2, 0, "push"],
			[3, 0, "and"],
			[4, 0, "fall"],

			[12, 8, "snails"],
			[13, 8, "is"],
			[14, 8, "you"],

			[12, 10, "key"],
			[13, 10, "is"],
			[18, 13, "open"],

			[0, 11, "flag"],
			[1, 11, "is"],
			[2, 11, "win"],

			[0, 13, "door"],
			[1, 13, "is"],
			[2, 13, "shut"],

			[0, 15, "ice"],
			[1, 15, "and"],
			[2, 15, "door"],
			[3, 15, "is"],
			[4, 15, "stop"],
		],
		snails: [
			[8, 4],
		],
		ice: [
			[20, 0], [21, 0], [22, 0],
			[22, 1],

			[22, 4],
			[21, 5], [22, 5],
			[19, 6], [20, 6], [21, 6], [22, 6],
			[22, 7],
			[0, 8], [8, 8], [19, 8], [22, 8],
			[0, 9], [1, 9], [8, 9], [19, 9], [20, 9], [21, 9], [22, 9],
			[0, 10], [1, 10], [2, 10], [3, 10], [8, 10], [19, 10], [20, 10], [21, 10], [22, 10],
			[3, 11], [8, 11], [19, 11], [20, 11], [21, 11], [22, 11],
			[0, 12], [1, 12], [2, 12], [3, 12], [4, 12], [8, 12], [19, 12], [20, 12], [21, 12], [22, 12],
			[3, 13], [4, 13], [7, 13], [8, 13], [19, 13], [20, 13], [21, 13], [22, 13],
			[0, 14], [1, 14], [2, 14], [3, 14], [4, 14], [5, 14], [7, 14], [8, 14], [9, 14], [10, 14], [11, 14], [12, 14], [13, 14], [14, 14], [15, 14], [16, 14], [17, 14], [18, 14], [19, 14], [20, 14], [21, 14],
			[5, 15], [6, 15], [7, 15], [8, 15], [9, 15], [10, 15], [11, 15], [12, 15], [13, 15], [14, 15], [15, 15], [16, 15], [17, 15], [18, 15], [19, 15], [20, 15],
		],
		door: [
			[19, 7],
		],
		key: [
			[8, 7],
		],
		flag: [
			[21, 8],
		],
	},
	{//level15
		data: {
			title: "無限増殖",
			mapX: 24,
			mapY: 14,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[21, 0, "ice"],
			[22, 0, "is"],
			[23, 0, "stop"],
			[21, 1, "flag"],
			[22, 1, "is"],
			[23, 1, "you"],

			[21, 12, "snails"],
			[22, 12, "is"],
			[23, 11, "win"],

			[19, 13, "water"],
			[20, 13, "is"],
			[21, 13, "shut"],
			[22, 13, "and"],
			[23, 12, "defeat"],

			[10, 5, "flag"],
			[10, 6, "is"],
			[10, 7, "open"],

			[6, 5, "key"],
			[6, 6, "make"],
		],
		snails: [
			[8, 6],
		],
		water: [
			[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [15, 0], [16, 0], [17, 0],
			[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1],
			[0, 2], [1, 2], [2, 2], [14, 2], [15, 2], [16, 2], [17, 2], [18, 2], [19, 2],
			[0, 3], [1, 3], [2, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 3], [20, 3], [21, 3], [22, 3],
			[0, 4], [1, 4], [2, 4], [14, 4], [15, 4], [16, 4], [17, 4], [18, 4], [19, 4], [20, 4], [21, 4], [22, 4], [23, 4],
			[0, 5], [1, 5], [2, 5], [14, 5], [15, 5], [16, 5], [17, 5], [18, 5], [19, 5], [20, 5], [21, 5], [22, 5], [23, 5],
			[0, 6], [1, 6], [2, 6], [14, 6], [15, 6], [16, 6], [17, 6], [18, 6], [19, 6], [20, 6], [21, 6], [22, 6], [23, 6],
			[0, 7], [1, 7], [2, 7], [14, 7], [15, 7], [16, 7], [17, 7], [18, 7], [19, 7], [20, 7], [21, 7], [22, 7], [23, 7],
			[0, 8], [1, 8], [2, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8], [20, 8], [21, 8], [22, 8], [23, 8],
			[0, 9], [1, 9], [2, 9], [14, 9], [15, 9], [16, 9], [17, 9], [18, 9], [19, 9], [20, 9], [21, 9], [22, 9],
			[0, 10], [1, 10], [2, 10], [14, 10], [15, 10], [16, 10], [17, 10], [18, 10], [19, 10], [20, 10], [21, 10], [22, 10], [23, 10],
			[0, 11], [1, 11], [2, 11], [14, 11], [15, 11], [16, 11], [17, 11], [18, 11], [19, 11],
			[0, 12], [1, 12], [2, 12], [3, 12], [4, 12], [5, 12], [6, 12], [7, 12], [8, 12], [9, 12], [10, 12], [11, 12], [12, 12], [13, 12], [14, 12], [15, 12], [16, 12], [17, 12],
			[0, 13], [1, 13], [2, 13], [3, 13], [4, 13], [5, 13], [6, 13], [7, 13], [8, 13], [9, 13], [10, 13], [11, 13], [12, 13], [13, 13], [14, 13], [15, 13], [16, 13], [17, 13],
		],
		ice: [
			[3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2],
			[3, 3], [13, 3],
			[3, 4], [13, 4],
			[3, 5], [13, 5],
			[3, 6], [13, 6],
			[3, 7], [13, 7],
			[3, 8], [13, 8],
			[3, 9], [13, 9],
			[3, 10], [13, 10],
			[3, 11], [4, 11], [5, 11], [6, 11], [7, 11], [8, 11], [9, 11], [10, 11], [11, 11], [12, 11], [13, 11],

			[18, 0], [19, 0], [20, 0],
			[20, 1],
			[20, 2], [21, 2], [22, 2], [23, 2],
			[23, 3],

			[23, 9],
			[20, 11], [21, 11], [22, 11],
			[18, 12], [19, 12], [20, 12],
			[18, 13],
		],
		flag: [
			[8, 3],
		],
	},
	{//level16
		data: {
			title: "意味は同じ",
			mapX: 21,
			mapY: 16,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[0, 0, "snails"], [1, 0, "is"], [2, 0, "you"],
			[0, 1, "and"],
			[0, 2, "ice"], [1, 2, "has"], [2, 2, "flag"],
			[0, 3, "is"], [2, 3, "is"],
			[0, 4, "melt"], [2, 4, "win"],

			[7, 3, "stone"],
			[8, 3, "is"],
			[9, 3, "hot"],

			[11, 2, "wall"],
			[12, 2, "is"],
			[13, 2, "stop"],

			[14, 6, "dog"],
			[15, 6, "is"],
			[16, 6, "push"],

			[11, 12, "stone"],
			[12, 12, "is"],
			[13, 12, "word"],
		],
		snails: [
			[7, 7],
		],
		dog: [
			[15, 9],
		],
		ice: [
			[16, 13],
		],
		wall: [
			[6, 1], [7, 1], [8, 1],
			[6, 2], [8, 2], [9, 2], [10, 2],
			[4, 3], [5, 3], [6, 3], [10, 3], [11, 3], [12, 3], [13, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 3], [20, 3],
			[4, 4], [11, 4], [20, 4],
			[4, 5], [11, 5], [13, 5], [14, 5], [20, 5],
			[4, 6], [11, 6], [13, 6], [20, 6],
			[4, 7], [11, 7], [20, 7],
			[4, 8], [20, 8],
			[4, 9], [11, 9], [20, 9],
			[4, 10], [11, 10], [20, 10],
			[4, 11], [5, 11], [6, 11], [7, 11], [8, 11], [9, 11], [10, 11], [11, 11], [12, 11], [13, 11], [14, 11], [15, 11], [17, 11], [18, 11], [19, 11], [20, 11],
			[14, 12], [18, 12],
			[14, 13], [18, 13],
			[14, 14], [18, 14],
			[14, 15], [18, 15],
		],
		stone: [
			[11, 8]
		],
	},
	{//level17
		data: {
			title: "一方通行",
			mapX: 24,
			mapY: 18,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[19, 1, "ice"],
			[19, 2, "is"],
			[19, 3, "you"],

			[14, 5, "move"],

			[6, 7, "wall"],
			[7, 7, "is"],
			[8, 7, "stop"],

			[8, 11, "dog"],
			[9, 11, "is"],
			[10, 11, "push"],

			[23, 9, "flag"],
			[23, 10, "is"],
			[23, 11, "win"],

			[2, 15, "snails"],
			[2, 16, "is"],
			[1, 17, "defeat"],

			[4, 15, "flag"],
			[5, 15, "is"],
			[6, 15, "shut"],
			[4, 16, "dog"],
			[5, 16, "is"],
			[6, 16, "hot"],
			[7, 16, "and"],
			[8, 16, "open"],

			[4, 17, "flag"],
			[5, 17, "and"],
			[6, 17, "snails"],
			[7, 17, "and"],
			[8, 17, "dog"],
			[9, 17, "is"],
			[10, 17, "weak"],

			[17, 17, "snails"],
			[18, 17, "is"],
			[19, 17, "you"],
			[20, 17, "and"],
			[21, 17, "open"],
			[22, 17, "and"],
			[23, 17, "melt"],
		],
		snails: [
			[19, 7],
		],
		dog: [
			[15, 1],
		],
		ice: [
			[0, 17],
		],
		wall: [
			[0, 0], [1, 0], [2, 0], [3, 0], [4, 0],
			[0, 1], [1, 1], [2, 1], [3, 1],
			[0, 2], [1, 2], [2, 2],
			[0, 3], [1, 3],
			[0, 4],
			[0, 5],
			[0, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6],
			[0, 7], [5, 7], [9, 7],
			[0, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8],
			[0, 9],
			[0, 10],
			[0, 11],
			[0, 12],
			[0, 13], [19, 13], [20, 13], [21, 13], [22, 13], [23, 13],
			[0, 14], [1, 14], [2, 14], [3, 14],
			[0, 15], [1, 15], [3, 15],
			[0, 16], [1, 16], [3, 16],
			[3, 17],
		],
		flag: [
			[21, 10],
		],
	},
	{//level18
		data: {
			title: "瞬足",
			mapX: 21,
			mapY: 14,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[2, 0, "dog"], [3, 0, "is"], [4, 0, "open"],
			[2, 1, "is"],
			[0, 2, "water"], [1, 2, "is"], [2, 2, "hot"],

			[0, 4, "text"], [1, 4, "is"], [2, 4, "melt"],

			[0, 6, "wall"], [2, 6, "flag"],
			[0, 7, "and"], [2, 7, "is"],
			[0, 8, "door"], [1, 8, "is"], [2, 8, "shut"],
			[0, 9, "is"],
			[0, 10, "stop"],

			[0, 12, "flag"], [1, 12, "is"], [2, 12, "win"],

			[5, 4, "snails"],
			[5, 5, "is"],
			[5, 6, "you"],

			[11, 3, "snails"],
			[11, 5, "is"],
			[12, 4, "move"],
			[13, 3, "is"],
			[13, 5, "dog"],
		],
		snails: [
			[12, 10],
		],
		dog: [
			[17, 4],
		],
		water: [
			[9, 6],
			[9, 7],
		],
		wall: [
			[5, 0], [19, 0],
			[3, 1], [19, 1],
			[3, 2], [5, 2], [6, 2], [19, 2],
			[3, 3], [5, 3], [6, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 3],
			[3, 4], [6, 4], [19, 4],
			[3, 5], [19, 5],
			[3, 6], [19, 6],
			[3, 7], [5, 7], [7, 7], [8, 7], [15, 7], [16, 7], [17, 7], [18, 7], [19, 7],
			[3, 8], [19, 8], [15, 8],
			[3, 9], [4, 9], [19, 9], [15, 9], [17, 9],
			[3, 10], [19, 10], [15, 10], [16, 10], [17, 10],
			[3, 11], [19, 11],
			[3, 12], [4, 12], [5, 12], [6, 12], [7, 12], [15, 12], [16, 12], [17, 12], [18, 12], [19, 12],
			[7, 13], [15, 13],
		],
		door: [
			[15, 11]
		],
		flag: [
			[16, 9]
		],
	},
	{//level19
		data: {
			title: "基本の復習",
			mapX: 15,
			mapY: 8,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[2, 3, "dog"],
			[2, 5, "is"],
			[2, 6, "move"],

			[4, 5, "wall"],
			[4, 6, "is"],
			[4, 7, "stop"],

			[9, 3, "snails"],
			[10, 3, "is"],
			[11, 3, "you"],

			[12, 4, "is"],

			[8, 6, "flag"],
			[10, 6, "win"],
		],
		snails: [
			[6, 6],
		],
		dog: [
			[12, 3, "left"],
		],
		wall: [
			[1, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2],
			[1, 3], [13, 3],
			[1, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [13, 4],
			[1, 5], [3, 5],
			[1, 6], [3, 6],
			[1, 7], [3, 7],
		],
	},
	{//level20
		data: {
			title: "一般的な間取りの家",
			mapX: 19,
			mapY: 17,
		},
		rule: {

		},
		text: [
			[0, 0, "stone"], [1, 0, "and"], [2, 0, "text"], [3, 0, "is"], [4, 0, "defeat"],
			[0, 1, "door"], [1, 1, "and"], [2, 1, "wall"], [3, 1, "is"], [4, 1, "stop"],
			[0, 2, "is"],
			[0, 3, "shut"],

			[0, 5, "flag"],
			[0, 6, "is"],
			[0, 7, "melt"],

			[6, 0, "ice"], [7, 0, "is"], [8, 0, "open"],
			[6, 1, "snails"], [7, 1, "is"], [8, 1, "melt"], [9, 1, "and"], [10, 1, "shut"],

			[3, 3, "flag"],
			[4, 3, "is"],
			[5, 3, "win"],

			[9, 3, "snails"], [10, 3, "is"], [11, 3, "weak"],
			[9, 4, "is"],
			[9, 5, "you"],

			[15, 4, "push"],
			[15, 5, "dog"], [16, 5, "is"],

			[3, 6, "stone"],
			[3, 7, "is"],
			[3, 8, "push"],

			[6, 7, "water"],
			[6, 8, "is"],
			[6, 9, "hot"],

			[13, 8, "text"],
			[14, 8, "and"],
			[15, 8, "dog"],
			[16, 8, "is"],
			[17, 8, "melt"],

			[5, 13, "text"],
			[6, 13, "is"],
			[7, 13, "push"],

			[9, 12, "and"],

			[14, 12, "open"],
			[15, 14, "is"],

			[0, 15, "flag"], [1, 15, "is"], [2, 15, "weak"],
			[0, 16, "ice"], [1, 16, "is"], [2, 16, "move"],
		],
		snails: [
			[17, 3],
		],
		dog: [
			[13, 6],
			[13, 10],
			[1, 11],
		],
		water: [
			[6, 5],
			[14, 9],
			[2, 10], [8, 10],
			[12, 12],
		],
		ice: [
			[14, 7, "right"],
		],
		wall: [
			[1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2], [14, 2], [15, 2], [16, 2], [17, 2], [18, 2],
			[1, 3], [6, 3], [13, 3], [18, 3],
			[1, 4], [6, 4], [13, 4], [18, 4],
			[1, 5], [13, 5], [18, 5],
			[1, 6], [5, 6], [6, 6], [7, 6], [18, 6],
			[1, 7], [5, 7], [7, 7], [12, 7], [13, 7], [15, 7], [16, 7], [17, 7], [18, 7],
			[1, 8], [5, 8], [7, 8], [18, 8],
			[1, 9], [5, 9], [7, 9], [9, 9], [10, 9], [11, 9], [12, 9], [13, 9], [15, 9], [16, 9], [17, 9], [18, 9],
			[0, 10], [1, 10], [3, 10], [4, 10], [5, 10], [7, 10], [9, 10], [12, 10], [18, 10],
			[0, 11], [12, 11], [18, 11],
			[0, 12], [18, 12],
			[0, 13], [11, 13], [12, 13], [18, 13],
			[0, 14], [1, 14], [2, 14], [3, 14], [11, 14], [18, 14],
			[3, 15], [11, 15], [18, 15],
			[3, 16], [4, 16], [5, 16], [6, 16], [7, 16], [8, 16], [9, 16], [10, 16], [11, 16], [12, 16], [13, 16], [14, 16], [15, 16], [16, 16], [17, 16], [18, 16],
		],
		door: [
			[6, 10],
		],
		stone: [
			[2, 4], [3, 4], [4, 4], [5, 4],

			[16, 12],
		],
		flag: [
			[2, 3],
		],
	},
	{//level21
		data: {
			title: "配送員",
			mapX: 21,
			mapY: 16,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[4, 0, "dog"],
			[5, 0, "is"],
			[6, 0, "fall"],
			[7, 0, "and"],
			[8, 0, "push"],


			[8, 3, "key"],
			[9, 2, "stone"], [9, 3, "is"], [9, 4, "push"],
			[10, 3, "open"],

			[15, 1, "water"],
			[15, 2, "is"],
			[15, 3, "defeat"],

			[15, 5, "snails"],
			[15, 6, "is"],
			[15, 7, "you"],

			[17, 6, "wall"],
			[17, 7, "and"],
			[17, 8, "door"], [18, 8, "is"], [19, 8, "shut"],
			[17, 9, "is"],
			[17, 10, "stop"],

			[20, 12, "flag"],
			[20, 13, "is"],
			[20, 14, "win"],

			[3, 13, "text"],
			[3, 14, "is"],
			[3, 15, "melt"],

			[5, 13, "ice"],
			[5, 14, "is"],
			[5, 15, "hot"],
		],
		snails: [
			[6, 2],
		],
		dog: [
			[4, 3],
		],
		water: [
			[7, 6], [8, 6], [9, 6], [10, 6], [11, 6], [12, 6], [13, 6],

			[7, 11], [8, 11], [9, 11], [10, 11], [11, 11], [12, 11], [13, 11],
			[7, 12], [8, 12], [9, 12], [10, 12], [11, 12], [12, 12], [13, 12],
		],
		ice: [
			[12, 0],
			[12, 1],
			[12, 2],
			[12, 3],
			[12, 4],
			[12, 5],

			[11, 10], [12, 10], [13, 10],
		],
		wall: [
			[0, 0], [1, 0], [2, 0], [3, 0], [14, 0], [15, 0], [16, 0],
			[0, 1], [14, 1], [16, 1],
			[0, 2], [14, 2], [16, 2],
			[0, 3], [14, 3], [16, 3],
			[0, 4], [4, 4], [14, 4], [15, 4], [16, 4],
			[0, 5], [14, 5], [16, 5],
			[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [6, 6], [14, 6], [16, 6],
			[4, 7], [12, 7], [14, 7], [16, 7],
			[4, 8], [5, 8], [6, 8], [14, 8], [15, 8], [16, 8],
			[6, 9], [16, 9],
			[6, 10], [14, 10], [16, 10],
			[6, 11], [14, 11], [16, 11],
			[2, 12], [3, 12], [4, 12], [5, 12], [6, 12], [14, 12],
			[2, 13], [4, 13], [6, 13], [14, 13],
			[2, 14], [4, 14], [6, 14], [14, 14],
			[2, 15], [4, 15], [6, 15], [14, 15],
		],
		door: [
			[15, 11],
		],
		stone: [
			[2, 4],
		],
		key: [
			[2, 2],
		],
		flag: [
			[18, 13],
		],
	},
	{//level22
		data: {
			title: "デジャビュ",
			mapX: 21,
			mapY: 16,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[4, 0, "key"],
			[5, 0, "is"],
			[6, 0, "defeat"],

			[0, 2, "water"],
			[1, 2, "is"],
			[2, 2, "sink"],

			[0, 4, "text"],
			[0, 5, "is"],
			[0, 6, "defeat"],

			[9, 1, "flag"],
			[12, 2, "is"],
			[13, 2, "win"],

			[9, 5, "dog"],
			[9, 6, "has"],
			[9, 7, "text"],

			[4, 7, "snails"],
			[5, 7, "is"],
			[6, 7, "you"],

			[10, 15, "stone"],
			[11, 15, "and"],
			[12, 15, "wall"],
			[13, 15, "is"],
			[14, 15, "stop"],
		],
		snails: [
			[12, 6],
		],
		water: [
			[4, 2], [5, 2], [6, 2],
			[4, 3], [5, 3], [6, 3],

			[18, 10],
		],
		wall: [
			[1, 3], [2, 3], [3, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [12, 3], [13, 3], [14, 3], [15, 3], [16, 3], [17, 3], [18, 3], [19, 3],
			[1, 4], [19, 4],
			[1, 5], [19, 5],
			[1, 6], [19, 6],
			[1, 7], [19, 7],
			[1, 8],
			[1, 9],
			[1, 10], [15, 10],
			[1, 11],
			[1, 12],
			[1, 13],
			[1, 14], [2, 14], [3, 14], [4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14], [10, 14], [11, 14], [12, 14],
		],
		stone: [
			[7, 0], [10, 0],
			[3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1],
			[3, 2], [14, 2],

			[13, 8], [14, 8], [15, 8], [16, 8], [17, 8], [18, 8], [19, 8],
			[13, 9], [19, 9],
			[13, 10], [19, 10],
			[13, 11], [19, 11],
			[13, 12], [19, 12], [20, 12],
			[13, 13], [20, 13],
			[13, 14], [14, 14], [15, 14], [16, 14], [17, 14], [18, 14], [19, 14], [20, 14],
		],
		key: [
			[8, 2],
		],
		flag: [
			[9, 11],
		],
	},
	{//level23
		data: {
			title: "温冷水",
			mapX: 24,
			mapY: 14,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[4, 0, "water"], [5, 0, "is"], [6, 0, "hot"],

			[21, 0, "stone"], [22, 0, "is"], [23, 0, "sink"],
			[21, 2, "text"], [22, 2, "is"], [23, 2, "float"],
			[21, 4, "ice"], [22, 4, "is"], [23, 4, "stop"],
			[21, 6, "snails"], [22, 6, "is"], [23, 6, "melt"],

			[0, 5, "wall"],
			[0, 6, "is"],
			[0, 7, "stop"],

			[3, 9, "snails"], [4, 9, "is"], [5, 9, "you"],
			[13, 9, "dog"], [14, 9, "is"], [15, 9, "push"],

			[20, 13, "win"],
		],
		snails: [
			[6, 4],
		],
		dog: [
			[15, 4],
		],
		water: [
			[10, 0], [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9], [10, 10], [10, 11], [10, 12], [10, 13],
		],
		ice: [
			[0, 0], [1, 0], [2, 0], [3, 0], [18, 0], [19, 0], [20, 0],
			[0, 1], [1, 1], [2, 1], [20, 1], [21, 1], [22, 1], [23, 1],
			[0, 2],
			[21, 3], [22, 3], [23, 3],

			[21, 5], [22, 5], [23, 5],

			[21, 7], [22, 7], [23, 7],
			[21, 8], [22, 8], [23, 8],
			[20, 9], [21, 9], [22, 9], [23, 9],
			[20, 10], [21, 10], [22, 10], [23, 10],
			[21, 11], [22, 11], [23, 11],
			[21, 12], [22, 12], [23, 12],
			[17, 13], [21, 13], [22, 13], [23, 13],
		],
		wall: [
			[17, 4],
		],
		stone: [
			[17, 10], [18, 10], [19, 10],
			[17, 11],
			[17, 12],
		],
	},
	{//level24
		data: {
			title: "無理を押し通す",
			mapX: 18,
			mapY: 18,
		},
		rule: {
			push: ["text"],
		},
		text: [
			[0, 0, "water"],
			[0, 1, "is"],
			[0, 2, "hot"],

			[4, 2, "flag"], [6, 2, "ice"], [8, 2, "win"],

			[10, 0, "dog"], [11, 0, "is"], [12, 0, "you"],
			[15, 0, "stone"], [16, 0, "is"], [17, 0, "stop"],

			[14, 7, "move"],

			[13, 9, "wall"], [14, 9, "is"], [15, 9, "stop"],

			[2, 10, "snails"], [3, 10, "is"], [4, 10, "push"],

			[0, 17, "dog"], [1, 17, "and"], [2, 17, "wall"], [3, 17, "is"], [4, 17, "melt"],
		],
		snails: [
			[15, 11, "right"],
		],
		dog: [
			[3, 13],
		],
		water: [
			[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [11, 6], [12, 6], [13, 6], [14, 6], [15, 6], [16, 6], [17, 6],
		],
		wall: [
			[10, 8], [11, 8], [12, 8], [13, 8], [14, 8], [15, 8], [16, 8], [17, 8],
			[10, 9],
			[10, 10],
			[10, 11],
			[12, 12],
			[10, 13], [12, 13],
			[12, 14],
			[10, 15], [11, 15], [12, 15], [13, 15], [14, 15], [15, 15], [16, 15], [17, 15],
			[10, 16], [11, 16], [12, 16], [13, 16], [14, 16], [15, 16], [16, 16], [17, 16],
			[10, 17], [11, 17], [12, 17], [13, 17], [14, 17], [15, 17], [16, 17], [17, 17],
		],
		stone: [
			[1, 0], [4, 0], [9, 0], [13, 0], [14, 0],
			[1, 1], [4, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1],
			[1, 2], [9, 2],
			[0, 3], [1, 3],

			[0, 16], [1, 16], [2, 16], [3, 16], [4, 16], [5, 16],
			[5, 17],
		],
		flag: [
			[5, 14],
		],
	},
];