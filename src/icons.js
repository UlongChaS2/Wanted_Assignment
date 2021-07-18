const searchIcon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMjUuNDc0LDBDMTAxLjE1MSwwLDAsMTAxLjE1MSwwLDIyNS40NzRjMCwxMjQuMzMsMTAxLjE1MSwyMjUuNDc0LDIyNS40NzQsMjI1LjQ3NA0KCQkJYzEyNC4zMywwLDIyNS40NzQtMTAxLjE0NCwyMjUuNDc0LTIyNS40NzRDNDUwLjk0OCwxMDEuMTUxLDM0OS44MDQsMCwyMjUuNDc0LDB6IE0yMjUuNDc0LDQwOS4zMjMNCgkJCWMtMTAxLjM3MywwLTE4My44NDgtODIuNDc1LTE4My44NDgtMTgzLjg0OFMxMjQuMTAxLDQxLjYyNiwyMjUuNDc0LDQxLjYyNnMxODMuODQ4LDgyLjQ3NSwxODMuODQ4LDE4My44NDgNCgkJCVMzMjYuODQ3LDQwOS4zMjMsMjI1LjQ3NCw0MDkuMzIzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA1LjkwMiw0NzYuNDcyTDM4Ni41NzQsMzU3LjE0NGMtOC4xMzEtOC4xMzEtMjEuMjk5LTguMTMxLTI5LjQzLDBjLTguMTMxLDguMTI0LTguMTMxLDIxLjMwNiwwLDI5LjQzbDExOS4zMjgsMTE5LjMyOA0KCQkJYzQuMDY1LDQuMDY1LDkuMzg3LDYuMDk4LDE0LjcxNSw2LjA5OGM1LjMyMSwwLDEwLjY0OS0yLjAzMywxNC43MTUtNi4wOThDNTE0LjAzMyw0OTcuNzc4LDUxNC4wMzMsNDg0LjU5Niw1MDUuOTAyLDQ3Ni40NzJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';

const bellIcon =
  'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSItNDMgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIxMy4zMzIwMzEgNTEyYy00NC4xMTcxODcgMC04MC0zNS44ODI4MTItODAtODAgMC04LjgzMjAzMSA3LjE2Nzk2OS0xNiAxNi0xNnMxNiA3LjE2Nzk2OSAxNiAxNmMwIDI2LjQ3NjU2MiAyMS41MjczNDQgNDggNDggNDggMjYuNDc2NTYzIDAgNDgtMjEuNTIzNDM4IDQ4LTQ4IDAtOC44MzIwMzEgNy4xNjc5NjktMTYgMTYtMTZzMTYgNy4xNjc5NjkgMTYgMTZjMCA0NC4xMTcxODgtMzUuODgyODEyIDgwLTgwIDgwem0wIDAiLz48cGF0aCBkPSJtMzg5LjMzMjAzMSA0NDhoLTM1MmMtMjAuNTg1OTM3IDAtMzcuMzMyMDMxLTE2Ljc0NjA5NC0zNy4zMzIwMzEtMzcuMzMyMDMxIDAtMTAuOTI1NzgxIDQuNzU3ODEyLTIxLjI2OTUzMSAxMy4wNTQ2ODgtMjguMzc1IDMyLjQ0OTIxOC0yNy40MTQwNjMgNTAuOTQ1MzEyLTY3LjI2MTcxOSA1MC45NDUzMTItMTA5LjQ4MDQ2OXYtNTkuNDgwNDY5YzAtODIuMzQzNzUgNjYuOTg4MjgxLTE0OS4zMzIwMzEgMTQ5LjMzMjAzMS0xNDkuMzMyMDMxIDgyLjM0NzY1NyAwIDE0OS4zMzU5MzggNjYuOTg4MjgxIDE0OS4zMzU5MzggMTQ5LjMzMjAzMXY1OS40ODA0NjljMCA0Mi4yMTg3NSAxOC40OTYwOTMgODIuMDY2NDA2IDUwLjczMDQ2OSAxMDkuMzMyMDMxIDguNTExNzE4IDcuMjUzOTA3IDEzLjI2OTUzMSAxNy41OTc2NTcgMTMuMjY5NTMxIDI4LjUyMzQzOCAwIDIwLjU4NTkzNy0xNi43NDYwOTQgMzcuMzMyMDMxLTM3LjMzNTkzOCAzNy4zMzIwMzF6bS0xNzYtMzUyYy02NC43MDMxMjUgMC0xMTcuMzMyMDMxIDUyLjYyODkwNi0xMTcuMzMyMDMxIDExNy4zMzIwMzF2NTkuNDgwNDY5YzAgNTEuNjQ0NTMxLTIyLjYzMjgxMiAxMDAuNDE0MDYyLTYyLjA3ODEyNSAxMzMuNzU3ODEyLS43NS42NDA2MjYtMS45MjE4NzUgMS45NjQ4NDQtMS45MjE4NzUgNC4wOTc2NTcgMCAyLjg5ODQzNyAyLjQzMzU5NCA1LjMzMjAzMSA1LjMzMjAzMSA1LjMzMjAzMWgzNTJjMi45MDIzNDQgMCA1LjMzNTkzOC0yLjQzMzU5NCA1LjMzNTkzOC01LjMzMjAzMSAwLTIuMTMyODEzLTEuMTc1NzgxLTMuNDU3MDMxLTEuODc4OTA3LTQuMDU0Njg4LTM5LjQ4ODI4MS0zMy4zODY3MTktNjIuMTIxMDkzLTgyLjE1NjI1LTYyLjEyMTA5My0xMzMuODAwNzgxdi01OS40ODA0NjljMC02NC43MDMxMjUtNTIuNjI4OTA3LTExNy4zMzIwMzEtMTE3LjMzNTkzOC0xMTcuMzMyMDMxem0wIDAiLz48cGF0aCBkPSJtMjEzLjMzMjAzMSA5NmMtOC44MzIwMzEgMC0xNi03LjE2Nzk2OS0xNi0xNnYtNjRjMC04LjgzMjAzMSA3LjE2Nzk2OS0xNiAxNi0xNnMxNiA3LjE2Nzk2OSAxNiAxNnY2NGMwIDguODMyMDMxLTcuMTY3OTY5IDE2LTE2IDE2em0wIDAiLz48L3N2Zz4=';

const arrowIcon =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMiA1MTIuMDAyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAyIDUxMi4wMDI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzg4LjQyNSwyNDEuOTUxTDE1MS42MDksNS43OWMtNy43NTktNy43MzMtMjAuMzIxLTcuNzItMjguMDY3LDAuMDRjLTcuNzQsNy43NTktNy43MiwyMC4zMjgsMC4wNCwyOC4wNjdsMjIyLjcyLDIyMi4xMDUNCgkJCUwxMjMuNTc0LDQ3OC4xMDZjLTcuNzU5LDcuNzQtNy43NzksMjAuMzAxLTAuMDQsMjguMDYxYzMuODgzLDMuODksOC45Nyw1LjgzNSwxNC4wNTcsNS44MzVjNS4wNzQsMCwxMC4xNDEtMS45MzIsMTQuMDE3LTUuNzk1DQoJCQlsMjM2LjgxNy0yMzYuMTU1YzMuNzM3LTMuNzE4LDUuODM0LTguNzc4LDUuODM0LTE0LjA1UzM5Mi4xNTYsMjQ1LjY3NiwzODguNDI1LDI0MS45NTF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';

export const icons = {
  searchIcon,
  bellIcon,
  arrowIcon,
};
