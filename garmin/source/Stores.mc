// Loyalty card data, mirroring stores.js on the web app.
//
// "bars" is the pre-computed CODE128 module string (1 = bar, 0 = space).
// Regenerate via tools/gen_bars.py if you add a new entry. QR codes are
// stored without a bar pattern and shown as an unsupported placeholder.

module Stores {

    function all() {
        return [
            {
                :id      => "tesco",
                :name    => "Tesco",
                :program => "Clubcard",
                :country => "UK",
                :code    => "634000020724155902",
                :format  => "CODE128",
                :color   => 0xEE1C2E,
                :bars    => "11010011100101001100001100010100011011001100110011001101001100010011101001100101110011001110001101011001100110110110011001100011101011"
            },
            {
                :id      => "sainsburys",
                :name    => "Sainsbury's",
                :program => "Nectar",
                :country => "UK",
                :code    => "9826300079614571032",
                :format  => "CODE128",
                :color   => 0xF06C00,
                :bars    => "110100111001111010001011100100110110110110001101100110010001111010110010000101011101100010011010000100100110001011110111011001110010110111001001100011101011"
            },
            {
                :id      => "boots",
                :name    => "Boots",
                :program => "Advantage",
                :country => "UK",
                :code    => "6330357000162650910",
                :format  => "CODE128",
                :color   => 0x05054B,
                :bars    => "110100111001010011000011011011000100010001101011000010011011001100100111011001110010011011000101110111101101101011110111010011101100101000111101100011101011"
            },
            {
                :id      => "coop",
                :name    => "Co-op",
                :program => "Membership",
                :country => "UK",
                :code    => "633174913710764145",
                :format  => "QR",
                :color   => 0x00B1E7,
                :bars    => ""
            },
            {
                :id      => "albert-heijn",
                :name    => "Albert Heijn",
                :program => "Bonuskaart",
                :country => "NL",
                :code    => "2623068685576",
                :format  => "CODE128",
                :color   => 0x0072CE,
                :bars    => "110100111001110010011011101101110100110010001111010010010011110010111011010001011110111011001110100110010111001100011101011"
            },
            {
                :id      => "jumbo",
                :name    => "Jumbo",
                :program => "Extra's",
                :country => "NL",
                :code    => "2622354259057",
                :format  => "CODE128",
                :color   => 0xFCD200,
                :bars    => "110100111001110010011011001110100100010001101011011100011100011010100010011001011110111011101101110110010010001100011101011"
            },
            {
                :id      => "kruidvat",
                :name    => "Kruidvat",
                :program => "Voordeelkaart",
                :country => "NL",
                :code    => "2621922639734",
                :format  => "CODE128",
                :color   => 0x005CA9,
                :bars    => "110100111001110010011011011100100101011110001110010011011010001000100001101001011110111011001001110110110111101100011101011"
            }
        ];
    }
}
