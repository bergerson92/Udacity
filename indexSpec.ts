import countries from "../index";

it("should get basic data on the country deutschland", async () => {
  const data = await countries.getCountry('deutschland');
  expect(data).toEqual({
    capital: 'Berlin',
    region: 'Europe'
  });
});

/** Add test for getRegionCountries function here */
it("should get the countries names within nafta", async() =>{
    const data = await countries.getRegionCountries('nafta');
    expect(data).toEqual([
        'Canada', 'Mexico', 'United States of America'
    ]);
});


it("should get capitals of NAFTA countries", async () => {
  const data = await countries.getRegionCapitals('nafta');
  expect(data).toEqual([
    'Ottawa', 'Mexico City', 'Washington, D.C.'
  ]);
});
