export function getData() {
  return [
    {
      quarter: "Q1",
      max: 200,
      pushpajali: 100,
      apax: 500,
      cloud9: 400
    },
    {
      quarter: "Q4",
      max: 400,
      pushpajali: 200,
      apax: 500,
      cloud9: 400
    }
  ];
}
export function getSeries() {
  return [
    {
      type: "line",
      xKey: "quarter",
      "yKey": "pushpajali",
      "yName": "pushpajali"
    },
    {
      type: "line",
      xKey: "quarter",
      "yKey": "max",
      "yName": "max"
    },
    {
      type: "line",
      xKey: "quarter",
      "yKey": "apax",
      "yName": "apax"
    },
    {
      type: "line",
      xKey: "quarter",
      "yKey": "cloud9",
      "yName": "cloud9"
    },

  ];
}
