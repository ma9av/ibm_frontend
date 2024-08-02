const hazardRange = {
    "CO":["0-4400","4500-9400","9500-12400","12500-15400", "15400-30400", "30400+"],
    "SO2":[
        "0-35",    // Good
        "36-75",   // Moderate
        "76-185",  // Unhealthy for Sensitive Groups
        "186-304", // Unhealthy
        "305-604", // Very Unhealthy
        "605+" // Hazardous
      ],
    "PM2.5":[
        "0.0-12.0",    // Good
        "12.1-35.4",   // Moderate
        "35.5-55.4",   // Unhealthy for Sensitive Groups
        "55.5-150.4",  // Unhealthy
        "150.5-250.4", // Very Unhealthy
        "250.5+"  // Hazardous
      ],
    "PM10":[
  "0-54",    // Good
  "55-154",  // Moderate
  "155-254", // Unhealthy for Sensitive Groups
  "255-354", // Unhealthy
  "355-424", // Very Unhealthy
  "425+"  // Hazardous
],

    "NO2":[
        "0-53",    // Good
        "54-100",  // Moderate
        "101-360", // Unhealthy for Sensitive Groups
        "361-649", // Unhealthy
        "650-1249",// Very Unhealthy
        "1250+"// Hazardous
      ],
    "O3":[
        "0-54",    // Good
        "55-70",   // Moderate
        "71-85",   // Unhealthy for Sensitive Groups
        "86-105",  // Unhealthy
        "106-200", // Very Unhealthy
        "201+"  // Hazardous
      ]
}


export default hazardRange