const brand = [
    { image: "TH1.jpg", name: "ORIS" },
    { image: "TH2.jpg", name: "OMEGA" },
    { image: "TH3.jpg", name: "MIDO" },
    { image: "TH4.jpg", name: "MAURICE LACROIX" },
    { image: "TH5.jpg", name: "LONGINES" },
    { image: "TH6.jpg", name: "TISSOT", link: "nu1.html" },
    { image: "TH7.jpg", name: "SEIKO" },
    { image: "TH8.jpg", name: "ERIENT" },
    { image: "TH9.jpg", name: "MOVADO" },
    { image: "TH10.jpg", name: "FREDERIQUE" },
    { image: "TH11.jpg", name: "CITIZEN" },
    { image: "TH12.jpg", name: "BULOVA" }
  ];
  
  // Load Brands
  function loadBrands(filteredBrands) {
    let s1 = "";
    for (let i = 0; i < filteredBrands.length; i++) {
      if (filteredBrands[i].link) {
        s1 += `
          <div class="spham">
            <a href="${filteredBrands[i].link}">
              <img src="img/${filteredBrands[i].image}" alt="${filteredBrands[i].name}">
              <h4>${filteredBrands[i].name}</h4>
            </a>
          </div>
        `;
      } else {
        s1 += `
          <div class="spham">
            <img src="img/${filteredBrands[i].image}" alt="${filteredBrands[i].name}">
            <h4>${filteredBrands[i].name}</h4>
          </div>
        `;
      }
    }
    document.getElementById("linksp").innerHTML = s1;
  }
  
  // Function to search brands by name
  function searchBrands() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredBrands = brand.filter(b => b.name.toLowerCase().includes(searchInput));
    loadBrands(filteredBrands);
  
    // If search input is empty, show all brands
    if (searchInput === "") {
      loadBrands(brand);
    }
  }
  
 
  
  // Initial load of all brands
  loadBrands(brand);
  