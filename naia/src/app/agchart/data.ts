export function getData() {
    return [
      {
        quarter: "Q1",
        petrol: 200,
        diesel: 100,
        cng:500
      },
      {
        quarter: "Q4",
        petrol: 400,
        diesel: 200,
        cng:500
      },
    ];
  }
  export function getSeries() {
    return [
      {
        type: "line",
        xKey: "quarter",
        yKey: "petrol",
        yName: "Petrol",
      },
      {
        type: "line",
        xKey: "quarter",
        yKey: "diesel",
        yName: "Diesel",
      },
      {
        type: "line",
        xKey: "quarter",
        yKey: "cng",
        yName: "CNG",
      },
      
    ];
  }
  