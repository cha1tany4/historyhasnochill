// ──────────────────────────────────────────────────────────────
// EVENT DATABASE
// ──────────────────────────────────────────────────────────────
const events = [
  { name: "the Wright Brothers' first flight", date: "1903-12-17", url: "https://en.wikipedia.org/wiki/Wright_brothers" },
  { name: "the Tunguska event", date: "1908-06-30", url: "https://en.wikipedia.org/wiki/Tunguska_event" },
  { name: "the sinking of the Titanic", date: "1912-04-15", url: "https://en.wikipedia.org/wiki/Titanic" },
  { name: "the start of World War I", date: "1914-07-28", url: "https://en.wikipedia.org/wiki/World_War_I" },
  { name: "the end of World War I", date: "1918-11-11", url: "https://en.wikipedia.org/wiki/World_War_I" },
  { name: "women gaining the vote in the US", date: "1920-08-18", url: "https://en.wikipedia.org/wiki/Nineteenth_Amendment_to_the_United_States_Constitution" },
  { name: "the founding of the USSR", date: "1922-12-30", url: "https://en.wikipedia.org/wiki/Soviet_Union" },
  { name: "the publication of Winnie The Pooh", date: "1926-10-14", url: "https://en.wikipedia.org/wiki/Winnie-the-Pooh" },
  { name: "the discovery of penicillin", date: "1928-09-28", url: "https://en.wikipedia.org/wiki/Penicillin" },
  { name: "the Black Tuesday stock market crash that began the Great Depression", date: "1929-10-29", url: "https://en.wikipedia.org/wiki/Wall_Street_Crash_of_1929" },
  { name: "the release of the Wizard of Oz (movie)", date: "1939-08-25", url: "https://en.wikipedia.org/wiki/The_Wizard_of_Oz" },
  { name: "the start of World War II", date: "1939-09-01", url: "https://en.wikipedia.org/wiki/World_War_II" },
  { name: "the attack on Pearl Harbor", date: "1941-12-07", url: "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor" },
  { name: "D-Day", date: "1944-06-06", url: "https://en.wikipedia.org/wiki/Normandy_landings" },
  { name: "the end of World War II", date: "1945-09-02", url: "https://en.wikipedia.org/wiki/World_War_II" },
  { name: "the atomic bombing of Hiroshima", date: "1945-08-06", url: "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki" },
  { name: "the founding of NATO", date: "1949-04-04", url: "https://en.wikipedia.org/wiki/NATO" },
  { name: "the first use of a charge card", date: "1950-02-08", url: "https://en.wikipedia.org/wiki/Diners_Club_International" },
  { name: "the first Formula One World Championship race", date: "1950-05-13", url: "https://en.wikipedia.org/wiki/1950_British_Grand_Prix" },
  { name: "the beginning of the Korean War", date: "1950-06-25", url: "https://en.wikipedia.org/wiki/Korean_War" },
  { name: "the coronation of Queen Elizabeth II", date: "1953-06-02", url: "https://en.wikipedia.org/wiki/Coronation_of_Elizabeth_II" },
  { name: "the climbing of Mt Everest", date: "1953-05-29", url: "https://en.wikipedia.org/wiki/Mount_Everest" },
  { name: "the opening of Disneyland", date: "1955-07-17", url: "https://en.wikipedia.org/wiki/Disneyland" },
  { name: "Rosa Parks refusing to move on the bus", date: "1955-12-01", url: "https://en.wikipedia.org/wiki/Rosa_Parks" },
  { name: "the launch of Sputnik", date: "1957-10-04", url: "https://en.wikipedia.org/wiki/Sputnik_1" },
  { name: "the Cuban Missile Crisis", date: "1962-10-16", url: "https://en.wikipedia.org/wiki/Cuban_Missile_Crisis" },
  { name: "MLK Jr's I Have a Dream Speech", date: "1963-08-28", url: "https://en.wikipedia.org/wiki/I_Have_a_Dream" },
  { name: "the assassination of JFK", date: "1963-11-22", url: "https://en.wikipedia.org/wiki/John_F._Kennedy" },
  { name: "the first episode of Star Trek", date: "1966-09-08", url: "https://en.wikipedia.org/wiki/Star_Trek" },
  { name: "the Moon landing", date: "1969-07-20", url: "https://en.wikipedia.org/wiki/Moon_landing" },
  { name: "Woodstock", date: "1969-08-15", url: "https://en.wikipedia.org/wiki/Woodstock" },
  { name: "the premiere of Sesame Street", date: "1969-11-03", url: "https://en.wikipedia.org/wiki/Sesame_Street" },
  { name: "the first Star Wars film's release", date: "1977-05-25", url: "https://en.wikipedia.org/wiki/Star_Wars_(film)" },
  { name: "the release of YMCA by the Village People", date: "1978-10-17", url: "https://en.wikipedia.org/wiki/Y.M.C.A._(song)" },
  { name: "the Three Mile Island accident", date: "1979-03-28", url: "https://en.wikipedia.org/wiki/Three_Mile_Island_accident" },
  { name: "the first McDonald's Happy Meal", date: "1979-06-15", url: "https://en.wikipedia.org/wiki/Happy_Meal" },
  { name: "the launch of MTV", date: "1981-08-01", url: "https://en.wikipedia.org/wiki/MTV" },
  { name: "the final episode of MASH", date: "1983-02-28", url: "https://en.wikipedia.org/wiki/Goodbye,_Farewell_and_Amen" },
  { name: "the release of the video Thriller by Michael Jackson", date: "1983-12-02", url: "https://en.wikipedia.org/wiki/Thriller_(song)" },
  { name: "the release of the Apple Macintosh", date: "1984-02-24", url: "https://en.wikipedia.org/wiki/Mac_(computer)" },
  { name: "the release of Where in the World Is Carmen Sandiego? (video game)", date: "1985-04-23", url: "https://en.wikipedia.org/wiki/Where_in_the_World_Is_Carmen_Sandiego%3F_(1985_video_game)" },
  { name: "the release of New Coke", date: "1985-04-23", url: "https://en.wikipedia.org/wiki/New_Coke" },
  { name: "the release of the Chicago Bears' Super Bowl Shuffle", date: "1985-12-11", url: "https://en.wikipedia.org/wiki/The_Super_Bowl_Shuffle" },
  { name: "the Challenger disaster", date: "1986-01-28", url: "https://en.wikipedia.org/wiki/Space_Shuttle_Challenger_disaster" },
  { name: "the Chernobyl disaster", date: "1986-04-26", url: "https://en.wikipedia.org/wiki/Chernobyl_disaster" },
  { name: "the release of We Didn't Start the Fire", date: "1989-09-18", url: "https://en.wikipedia.org/wiki/We_Didn%27t_Start_the_Fire" },
  { name: "the fall of the Berlin Wall", date: "1989-11-09", url: "https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall" },
  { name: "the Tiananmen Square protests", date: "1989-06-04", url: "https://en.wikipedia.org/wiki/1989_Tiananmen_Square_protests_and_massacre" },
  { name: "the release of the Game Boy in North America", date: "1989-07-31", url: "https://en.wikipedia.org/wiki/Game_Boy" },
  { name: "the dissolution of the Soviet Union", date: "1991-12-26", url: "https://en.wikipedia.org/wiki/Dissolution_of_the_Soviet_Union" },
  { name: "the Dream Team winning an Olympic gold medal", date: "1992-08-08", url: "https://en.wikipedia.org/wiki/1992_United_States_men%27s_Olympic_basketball_team" },
  { name: "the release of Crystal Pepsi", date: "1992-12-01", url: "https://en.wikipedia.org/wiki/Crystal_Pepsi" },
  { name: "the release of Jurassic Park", date: "1993-06-11", url: "https://en.wikipedia.org/wiki/Jurassic_Park" },
  { name: "the premiere of Friends", date: "1994-09-22", url: "https://en.wikipedia.org/wiki/Friends" },
  { name: "the release of Windows 95", date: "1995-08-24", url: "https://en.wikipedia.org/wiki/Windows_95" },
  { name: "the release of Toy Story", date: "1995-11-22", url: "https://en.wikipedia.org/wiki/Toy_Story" },
  { name: "Dolly the sheep being cloned", date: "1996-07-05", url: "https://en.wikipedia.org/wiki/Dolly_(sheep)" },
  { name: "the song Macarena (Bayside Boys Remix) hitting number 1 in the USA", date: "1996-08-03", url: "https://en.wikipedia.org/wiki/Macarena_(song)" },
  { name: "the first episode of Pokemon broadcast in Japan", date: "1997-04-01", url: "https://en.wikipedia.org/wiki/Pok%C3%A9mon_(TV_series)" },
  { name: "the first episode of South Park", date: "1997-08-13", url: "https://en.wikipedia.org/wiki/South_Park" },
  { name: "the release of Titanic (film)", date: "1997-12-19", url: "https://en.wikipedia.org/wiki/Titanic_(disambiguation)" },
  { name: "Google's founding", date: "1998-09-04", url: "https://en.wikipedia.org/wiki/Google" },
  { name: "the release of The Matrix", date: "1999-03-31", url: "https://en.wikipedia.org/wiki/Matrix" },
  { name: "Destiny's Child's release of Say My Name", date: "1999-10-14", url: "https://en.wikipedia.org/wiki/Say_My_Name" },
  { name: "the launch of Wikipedia", date: "2001-01-15", url: "https://en.wikipedia.org/wiki/Wikipedia" },
  { name: "the release of the All Your Base is Belong to Us video", date: "2001-02-15", url: "https://en.wikipedia.org/wiki/All_your_base_are_belong_to_us" },
  { name: "the September 11 attacks", date: "2001-09-11", url: "https://en.wikipedia.org/wiki/September_11_attacks" },
  { name: "the release of the iPod", date: "2001-10-01", url: "https://en.wikipedia.org/wiki/IPod" },
  { name: "the Columbia shuttle disaster", date: "2003-02-01", url: "https://en.wikipedia.org/wiki/Space_Shuttle_Columbia_disaster" },
  { name: "the U.S. invasion of Iraq", date: "2003-03-20", url: "https://en.wikipedia.org/wiki/2003_invasion_of_Iraq" },
  { name: "the release of Mr Brightside by the Killers", date: "2003-09-23", url: "https://en.wikipedia.org/wiki/Mr._Brightside" },
  { name: "the Indian Ocean tsunami", date: "2004-12-26", url: "https://en.wikipedia.org/wiki/2004_Indian_Ocean_earthquake_and_tsunami" },
  { name: "the launch of YouTube", date: "2005-02-14", url: "https://en.wikipedia.org/wiki/YouTube" },
  { name: "the first episode of the US version of The Office", date: "2005-03-24", url: "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)" },
  { name: "the release of the first iPhone", date: "2007-06-29", url: "https://en.wikipedia.org/wiki/IPhone_(1st_generation)" },
  { name: "the start of the 2008 financial crisis", date: "2008-09-15", url: "https://en.wikipedia.org/wiki/2008_financial_crisis" },
  { name: "the Deepwater Horizon oil spill", date: "2010-04-20", url: "https://en.wikipedia.org/wiki/Deepwater_Horizon_oil_spill" },
  { name: "the Arab Spring beginning", date: "2010-12-17", url: "https://en.wikipedia.org/wiki/Arab_Spring" },
  { name: "the death of Osama bin Laden", date: "2011-05-02", url: "https://en.wikipedia.org/wiki/Osama_bin_Laden" },
  { name: "the release of Minecraft", date: "2011-11-18", url: "https://en.wikipedia.org/wiki/Minecraft" },
  { name: "the Higgs boson discovery", date: "2012-07-04", url: "https://en.wikipedia.org/wiki/Higgs_boson" },
  { name: "the inauguration of Pope Francis", date: "2013-03-19", url: "https://en.wikipedia.org/wiki/Pope_Francis" },
  { name: "the Snowden revelations", date: "2013-06-05", url: "https://en.wikipedia.org/wiki/Snowden_disclosures" },
  { name: "the release of Frozen", date: "2013-11-27", url: "https://en.wikipedia.org/wiki/Frozen" },
  { name: "the disappearance of Malaysia Airlines Flight 370", date: "2014-03-08", url: "https://en.wikipedia.org/wiki/Malaysia_Airlines_Flight_370" },
  { name: "the Ice Bucket Challenge going viral", date: "2014-07-15", url: "https://en.wikipedia.org/wiki/Ice_Bucket_Challenge" },
  { name: "U2 shoving their album onto iTunes", date: "2014-09-09", url: "https://en.wikipedia.org/wiki/Songs_of_Innocence_(U2_album)" },
  { name: "the UK Brexit vote", date: "2016-06-23", url: "https://en.wikipedia.org/wiki/2016_United_Kingdom_European_Union_membership_referendum" },
  { name: "Trump's first inauguration", date: "2017-01-20", url: "https://en.wikipedia.org/wiki/First_inauguration_of_Donald_Trump" },
  { name: "the first photo of a black hole", date: "2019-04-10", url: "https://en.wikipedia.org/wiki/Event_Horizon_Telescope" },
  { name: "the WHO declaring COVID-19 a pandemic", date: "2020-03-11", url: "https://en.wikipedia.org/wiki/COVID-19_pandemic" },
  { name: "the launch of the James Webb Space Telescope", date: "2021-12-25", url: "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope" },
  { name: "the release of ChatGPT", date: "2022-11-30", url: "https://en.wikipedia.org/wiki/ChatGPT" },
  { name: "the resignation of Prime Minister Liz Truss", date: "2022-10-20", url: "https://en.wikipedia.org/wiki/Liz_Truss" },
  { name: "the Great Molasses Flood", date: "1919-01-15", url: "https://en.wikipedia.org/wiki/Great_Molasses_Flood" },
  { name: "the War of the Worlds radio panic", date: "1938-10-30", url: "https://en.wikipedia.org/wiki/The_War_of_the_Worlds_(1938_radio_drama)" },
  { name: "Sweden switching driving sides overnight", date: "1967-09-03", url: "https://en.wikipedia.org/wiki/Dagen_H" },
  { name: "the Roswell UFO incident", date: "1947-07-08", url: "https://en.wikipedia.org/wiki/Roswell_incident" },
  { name: "the Black Monday stock market crash", date: "1987-10-19", url: "https://en.wikipedia.org/wiki/Black_Monday_(1987)" },
  { name: "Pac-Man's release in Japan", date: "1980-05-22", url: "https://en.wikipedia.org/wiki/Pac-Man" },
  { name: "Apple Computer Co. being founded", date: "1976-04-01", url: "https://en.wikipedia.org/wiki/Apple_Inc." },
  { name: "the Simpsons premiering", date: "1989-12-17", url: "https://en.wikipedia.org/wiki/The_Simpsons" },
  { name: "Y2K — the bug that wasn't", date: "1999-12-31", url: "https://en.wikipedia.org/wiki/Year_2000_problem" },
  { name: "the first paying space tourist launching", date: "2001-04-28", url: "https://en.wikipedia.org/wiki/Dennis_Tito" },
  { name: "Yuri Gagarin becoming the first human in space", date: "1961-04-12", url: "https://en.wikipedia.org/wiki/Yuri_Gagarin" },
  { name: "the first woman in space", date: "1963-06-16", url: "https://en.wikipedia.org/wiki/Valentina_Tereshkova" },
  { name: "Australia declaring war on emus", date: "1932-11-02", url: "https://en.wikipedia.org/wiki/Emu_War" },
  { name: "Mike the Headless Chicken surviving decapitation", date: "1945-09-10", url: "https://en.wikipedia.org/wiki/Mike_the_Headless_Chicken" },
  { name: "the first :- ) emoticon being typed", date: "1982-09-19", url: "https://en.wikipedia.org/wiki/Emoticon" },
  { name: "the first spam email ever sent", date: "1978-05-03", url: "https://en.wikipedia.org/wiki/Email_spam" },
  { name: "the world's first ATM opening in London", date: "1967-06-27", url: "https://en.wikipedia.org/wiki/Automated_teller_machine" },
  { name: "cold fusion being falsely announced", date: "1989-03-23", url: "https://en.wikipedia.org/wiki/Cold_fusion" },
  { name: "the first internet domain name being registered", date: "1985-03-15", url: "https://en.wikipedia.org/wiki/Symbolics.com" },
  { name: "a teenager landing a plane in Red Square", date: "1987-05-28", url: "https://en.wikipedia.org/wiki/Mathias_Rust" },
  { name: "Pluto being demoted to a dwarf planet", date: "2006-08-24", url: "https://en.wikipedia.org/wiki/Pluto" },
  { name: "Elvis Presley's death", date: "1977-08-16", url: "https://en.wikipedia.org/wiki/Elvis_Presley_death_conspiracy_theories" },
  { name: "John Lennon's assassination", date: "1980-12-08", url: "https://en.wikipedia.org/wiki/Murder_of_John_Lennon" },
  { name: "the first mobile phone call", date: "1973-04-03", url: "https://en.wikipedia.org/wiki/Martin_Cooper_(inventor)" },
  { name: "the Swiss Army accidentally invading Liechtenstein", date: "2007-03-01", url: "https://en.wikipedia.org/wiki/2007_Liechtenstein_border_incident" },
  { name: "Skylab falling back to Earth", date: "1979-07-11", url: "https://en.wikipedia.org/wiki/Skylab" },
  { name: "the BBC announcing there was no news", date: "1930-04-18", url: "https://en.wikipedia.org/wiki/BBC" },
  { name: "NASA losing a $125M Mars orbiter to a unit conversion error", date: "1999-09-23", url: "https://en.wikipedia.org/wiki/Mars_Climate_Orbiter" },
  { name: "the Wow! signal being detected", date: "1977-08-15", url: "https://en.wikipedia.org/wiki/Wow!_signal" },
  { name: "the first person being killed by a robot", date: "1979-01-25", url: "https://en.wikipedia.org/wiki/Robert_Williams_(robot_fatality)" },
  { name: "Tetris being created", date: "1984-06-06", url: "https://en.wikipedia.org/wiki/Tetris" },
  { name: "Super Mario Bros. being released", date: "1985-09-13", url: "https://en.wikipedia.org/wiki/Super_Mario_Bros." },
  { name: "the Beatles arriving in New York", date: "1964-02-07", url: "https://en.wikipedia.org/wiki/The_Beatles_in_America" },
  { name: "the Pepsi Number Fever riots in the Philippines", date: "1992-05-25", url: "https://en.wikipedia.org/wiki/Pepsi_Number_Fever" },
  { name: "the first YouTube video being uploaded", date: "2005-04-23", url: "https://en.wikipedia.org/wiki/Me_at_the_zoo" },
  { name: "NATO accidentally bombing the Chinese Embassy in Belgrade", date: "1999-05-07", url: "https://en.wikipedia.org/wiki/NATO_bombing_of_the_Chinese_embassy_in_Belgrade" },
  { name: "Seinfeld premiering", date: "1989-07-05", url: "https://en.wikipedia.org/wiki/Seinfeld" },
  { name: "Princess Diana's death in Paris", date: "1997-08-31", url: "https://en.wikipedia.org/wiki/Death_of_Diana,_Princess_of_Wales" },
  { name: "Hong Kong being returned to China", date: "1997-07-01", url: "https://en.wikipedia.org/wiki/Handover_of_Hong_Kong" },
  { name: "Prince Charles and Diana's wedding", date: "1981-07-29", url: "https://en.wikipedia.org/wiki/Wedding_of_Charles,_Prince_of_Wales,_and_Lady_Diana_Spencer" },
  { name: "Nelson Mandela being released from prison", date: "1990-02-11", url: "https://en.wikipedia.org/wiki/Nelson_Mandela" },
  { name: "the Hubble Space Telescope being deployed", date: "1990-04-25", url: "https://en.wikipedia.org/wiki/Hubble_Space_Telescope" },
  { name: "NASA being founded", date: "1958-10-01", url: "https://en.wikipedia.org/wiki/NASA" },
  { name: "the first spacewalk", date: "1965-03-18", url: "https://en.wikipedia.org/wiki/Alexei_Leonov" },
  { name: "the Exxon Valdez oil spill", date: "1989-03-24", url: "https://en.wikipedia.org/wiki/Exxon_Valdez_oil_spill" },
  { name: "Viking 1 landing on Mars", date: "1976-07-20", url: "https://en.wikipedia.org/wiki/Viking_1" },
  { name: "the Apollo 1 cabin fire", date: "1967-01-27", url: "https://en.wikipedia.org/wiki/Apollo_1" },
  { name: "JFK's 'We Choose to Go to the Moon' speech", date: "1962-09-12", url: "https://en.wikipedia.org/wiki/We_choose_to_go_to_the_Moon" },
  { name: "the first nuclear bomb test", date: "1945-07-16", url: "https://en.wikipedia.org/wiki/Trinity_(nuclear_test)" },
  { name: "Walt Disney World opening", date: "1971-10-01", url: "https://en.wikipedia.org/wiki/Walt_Disney_World_Golf_Classic" },
  { name: "the world's first website going live", date: "1991-08-06", url: "https://en.wikipedia.org/wiki/World_Wide_Web" },
  { name: "the first internet message being sent — and crashing after two letters", date: "1969-10-29", url: "https://en.wikipedia.org/wiki/ARPANET" },
  { name: "the first text message being sent", date: "1992-12-03", url: "https://en.wikipedia.org/wiki/SMS" },
  { name: "the Miracle on Ice", date: "1980-02-22", url: "https://en.wikipedia.org/wiki/Miracle_on_Ice" },
  { name: "the first sub-4-minute mile being run", date: "1954-05-06", url: "https://en.wikipedia.org/wiki/Roger_Bannister" },
  { name: "Barack Obama being elected US President", date: "2008-11-04", url: "https://en.wikipedia.org/wiki/Barack_Obama" },
  { name: "Jimi Hendrix's death", date: "1970-09-18", url: "https://en.wikipedia.org/wiki/Jimi_Hendrix" },
  { name: "John Glenn orbiting Earth", date: "1962-02-20", url: "https://en.wikipedia.org/wiki/John_Glenn" },
  { name: "the Munich Air Disaster", date: "1958-02-06", url: "https://en.wikipedia.org/wiki/Munich_air_disaster" },
  { name: "the San Francisco earthquake", date: "1906-04-18", url: "https://en.wikipedia.org/wiki/1906_San_Francisco_earthquake" },
  { name: "Nadia Comaneci scoring the first perfect 10 in Olympic gymnastics", date: "1976-07-02", url: "https://en.wikipedia.org/wiki/Nadia_Comaneci" },
  { name: "the first Garfield comic strip being published", date: "1978-09-17", url: "https://en.wikipedia.org/wiki/Garfield" },
  { name: "Louise Brown, the first IVF baby, being born", date: "1978-07-25", url: "https://en.wikipedia.org/wiki/Louise_Brown" },
  { name: "the Rubik's Cube going on sale", date: "1978-06-09", url: "https://en.wikipedia.org/wiki/Rubik%27s_Cube" },
  { name: "the first human-powered aircraft crossing the English Channel", date: "1979-06-12", url: "https://en.wikipedia.org/wiki/Gossamer_Albatross" },
  { name: "Voyager 1 sending the first close-up photos of Saturn's rings", date: "1980-11-12", url: "https://en.wikipedia.org/wiki/Voyager_1" },
  { name: "the Space Shuttle Columbia landing like an aeroplane for the first time", date: "1981-04-14", url: "https://en.wikipedia.org/wiki/Space_Shuttle_Columbia" },
  { name: "Sandra Day O'Connor being confirmed as the first female US Supreme Court Justice", date: "1981-09-25", url: "https://en.wikipedia.org/wiki/Sandra_Day_O%27Connor" },
  { name: "the first personal computer virus spreading via floppy disk", date: "1983-11-10", url: "https://en.wikipedia.org/wiki/Elk_Cloner" },
  { name: "snow falling on Miami for the only time in recorded history", date: "1977-01-18", url: "https://en.wikipedia.org/wiki/1977_Miami_snowfall" },
  { name: "29,000 rubber ducks accidentally released into the Pacific", date: "1987-06-16", url: "https://en.wikipedia.org/wiki/Friendly_Floatees" },
  { name: "Conan O'Brien hosting his first Late Night episode", date: "1993-09-22", url: "https://en.wikipedia.org/wiki/Conan_O%27Brien" },
  { name: "Andrew Wiles announcing a proof of Fermat's Last Theorem", date: "1993-06-23", url: "https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem" },
  { name: "the Channel Tunnel opening", date: "1994-05-01", url: "https://en.wikipedia.org/wiki/Channel_Tunnel" },
  { name: "Deep Blue defeating chess world champion Kasparov", date: "1997-08-28", url: "https://en.wikipedia.org/wiki/Deep_Blue_(chess_computer)" },
  { name: "the google.com domain being registered", date: "1997-09-15", url: "https://en.wikipedia.org/wiki/Google" },
  { name: "Tuvalu selling its .tv internet domain and doubling its GDP", date: "1998-02-06", url: "https://en.wikipedia.org/wiki/Tuvalu" },
  { name: "the world's first Ice Hotel opening in Sweden", date: "1998-06-07", url: "https://en.wikipedia.org/wiki/Icehotel_(hotel)" },
  { name: "professional wrestler Jesse Ventura being elected Governor of Minnesota", date: "1998-11-06", url: "https://en.wikipedia.org/wiki/Jesse_Ventura" },
  { name: "Finland introducing income-based speeding fines", date: "1991-07-10", url: "https://en.wikipedia.org/wiki/Day-fine" },
  { name: "the Sega Dreamcast launching on 9/9/99", date: "1999-09-09", url: "https://en.wikipedia.org/wiki/Dreamcast" },
  { name: "the Ig Nobel Prizes being awarded for impractical science", date: "1999-10-05", url: "https://en.wikipedia.org/wiki/Ig_Nobel_Prize" },
  { name: "Greece winning Euro 2004 at 150-to-1 odds", date: "2004-08-26", url: "https://en.wikipedia.org/wiki/UEFA_Euro_2004" },
  { name: "Firefox 1.0 being released", date: "2004-11-09", url: "https://en.wikipedia.org/wiki/Firefox" },
  { name: "Finland being declared the best country in the world", date: "2007-11-06", url: "https://en.wikipedia.org/wiki/Finland" },
  { name: "China's first spacewalk", date: "2008-09-27", url: "https://en.wikipedia.org/wiki/Shenzhou_7" },
  { name: "Obama's ancestral village in Kenya throwing a three-day party", date: "2008-11-04", url: "https://en.wikipedia.org/wiki/Barack_Obama" },
  { name: "NASA's 30-year-old littering fine being paid to Esperance, Australia", date: "2009-02-19", url: "https://en.wikipedia.org/wiki/Skylab" },
  { name: "the Partition of Bengal being announced", date: "1905-07-14", url: "https://en.wikipedia.org/wiki/Partition_of_Bengal_(1905)" },
  { name: "the Jallianwala Bagh Massacre", date: "1919-04-13", url: "https://en.wikipedia.org/wiki/Jallianwala_Bagh_massacre" },
  { name: "Tagore winning the Nobel Prize in Literature", date: "1913-11-13", url: "https://en.wikipedia.org/wiki/Rabindranath_Tagore" },
  { name: "CV Raman discovering the Raman Effect", date: "1928-02-28", url: "https://en.wikipedia.org/wiki/C._V._Raman" },
  { name: "the Reserve Bank of India being founded on April Fools' Day", date: "1935-04-01", url: "https://en.wikipedia.org/wiki/Reserve_Bank_of_India" },
  { name: "Bhagat Singh being executed at 23", date: "1931-03-23", url: "https://en.wikipedia.org/wiki/Bhagat_Singh" },
  { name: "the Quit India Movement being launched", date: "1942-08-09", url: "https://en.wikipedia.org/wiki/Quit_India_Movement" },
  { name: "India becoming independent", date: "1947-08-15", url: "https://en.wikipedia.org/wiki/Indian_independence_movement" },
  { name: "Gandhi's assassination", date: "1948-01-30", url: "https://en.wikipedia.org/wiki/Assassination_of_Mahatma_Gandhi" },
  { name: "India becoming a republic", date: "1950-01-26", url: "https://en.wikipedia.org/wiki/Republic_Day_(India)" },
  { name: "India's first television broadcast on Doordarshan", date: "1959-09-15", url: "https://en.wikipedia.org/wiki/Doordarshan" },
  { name: "Maharashtra and Gujarat being created from Bombay State", date: "1960-05-01", url: "https://en.wikipedia.org/wiki/Bombay_Reorganisation_Act,_1960" },
  { name: "India liberating Goa from Portugal", date: "1961-12-19", url: "https://en.wikipedia.org/wiki/Annexation_of_Goa" },
  { name: "the India-China War beginning", date: "1962-10-22", url: "https://en.wikipedia.org/wiki/Sino-Indian_War" },
  { name: "Pakistan surrendering and Bangladesh being born", date: "1971-12-16", url: "https://en.wikipedia.org/wiki/Bangladesh_Liberation_War" },
  { name: "Project Tiger being launched", date: "1973-04-01", url: "https://en.wikipedia.org/wiki/Project_Tiger" },
  { name: "India's secret first nuclear test: Smiling Buddha", date: "1974-05-18", url: "https://en.wikipedia.org/wiki/Smiling_Buddha" },
  { name: "India launching its first satellite, Aryabhata", date: "1975-04-19", url: "https://en.wikipedia.org/wiki/Aryabhata_(satellite)" },
  { name: "Sikkim merging with India", date: "1975-05-16", url: "https://en.wikipedia.org/wiki/Sikkim" },
  { name: "Indira Gandhi declaring the Emergency", date: "1975-06-25", url: "https://en.wikipedia.org/wiki/The_Emergency_(India)" },
  { name: "India winning the Cricket World Cup", date: "1983-06-25", url: "https://en.wikipedia.org/wiki/1983_Cricket_World_Cup_Final" },
  { name: "Rakesh Sharma becoming the first Indian in space", date: "1984-04-03", url: "https://en.wikipedia.org/wiki/Rakesh_Sharma" },
  { name: "India's first metro rail opening in Kolkata", date: "1984-10-24", url: "https://en.wikipedia.org/wiki/Kolkata_Metro" },
  { name: "the Bhopal Gas Disaster", date: "1984-12-03", url: "https://en.wikipedia.org/wiki/Bhopal_disaster" },
  { name: "Air India Flight 182 being bombed off Ireland", date: "1985-06-23", url: "https://en.wikipedia.org/wiki/Air_India_Flight_182" },
  { name: "the Mandal Commission implementation triggering riots", date: "1990-08-02", url: "https://en.wikipedia.org/wiki/Mandal_Commission" },
  { name: "India secretly airlifting gold to avoid bankruptcy", date: "1991-07-04", url: "https://en.wikipedia.org/wiki/1991_Indian_economic_crisis" },
  { name: "the Babri Masjid being demolished", date: "1992-12-06", url: "https://en.wikipedia.org/wiki/Babri_Masjid" },
  { name: "the Bombay serial bomb blasts", date: "1993-03-12", url: "https://en.wikipedia.org/wiki/1993_Bombay_bombings" },
  { name: "the Pokhran II nuclear tests shocking the world", date: "1998-05-11", url: "https://en.wikipedia.org/wiki/Pokhran-II" },
  { name: "India winning the Kargil War", date: "1999-07-26", url: "https://en.wikipedia.org/wiki/Kargil_War" },
  { name: "India's one billionth citizen being born", date: "2000-05-11", url: "https://en.wikipedia.org/wiki/Demographics_of_India" },
  { name: "the 26/11 Mumbai terror attacks", date: "2008-11-26", url: "https://en.wikipedia.org/wiki/2008_Mumbai_attacks" },
  { name: "AR Rahman winning two Oscars for Slumdog Millionaire", date: "2009-02-22", url: "https://en.wikipedia.org/wiki/A._R._Rahman" },
  { name: "the Battle of Los Angeles — the US firing 1,400 shells at a weather balloon", date: "1942-02-25", url: "https://en.wikipedia.org/wiki/Battle_of_Los_Angeles" },
  { name: "the first electron microscope being demonstrated", date: "1940-04-20", url: "https://en.wikipedia.org/wiki/Electron_microscope" },
  { name: "the liberation of Auschwitz by Soviet troops", date: "1945-01-27", url: "https://en.wikipedia.org/wiki/Auschwitz_concentration_camp" },
  { name: "the D-Day crossword panic — where MI5 interrogated a teacher over coincidental answers", date: "1944-06-06", url: "https://en.wikipedia.org/wiki/D-Day_crossword" },
  { name: "the USS Nautilus — the world's first nuclear submarine — being launched", date: "1954-01-21", url: "https://en.wikipedia.org/wiki/USS_Nautilus_(SSN-571)" },
  { name: "Laika the dog being launched into space aboard Sputnik 2", date: "1957-11-03", url: "https://en.wikipedia.org/wiki/Laika" },
  { name: "Chuck Yeager breaking the sound barrier with two broken ribs", date: "1947-10-14", url: "https://en.wikipedia.org/wiki/Chuck_Yeager" },
  { name: "the first controlled nuclear chain reaction in a squash court", date: "1942-12-02", url: "https://en.wikipedia.org/wiki/Chicago_Pile-1" },
  { name: "Emperor Hirohito broadcasting Japan's surrender on radio — the first time his subjects heard his voice", date: "1945-08-15", url: "https://en.wikipedia.org/wiki/Surrender_of_Japan" },
  { name: "the Grand Canyon mid-air collision that created the FAA", date: "1956-06-30", url: "https://en.wikipedia.org/wiki/1956_Grand_Canyon_mid-air_collision" },
  { name: "the Salk polio vaccine being declared safe — and church bells ringing across America", date: "1955-04-12", url: "https://en.wikipedia.org/wiki/Jonas_Salk" },
  { name: "Canada cancelling the Avro Arrow and destroying every prototype and blueprint", date: "1958-03-25", url: "https://en.wikipedia.org/wiki/Avro_Canada_CF-105_Arrow" },
  { name: "the US launching Explorer 1 and accidentally discovering the Van Allen radiation belts", date: "1958-02-01", url: "https://en.wikipedia.org/wiki/Explorer_1" },
  { name: "the Kitty Genovese murder that launched the study of the bystander effect", date: "1964-03-13", url: "https://en.wikipedia.org/wiki/Murder_of_Kitty_Genovese" },
  { name: "the Beatles appearing on The Ed Sullivan Show", date: "1964-02-09", url: "https://en.wikipedia.org/wiki/The_Beatles_on_The_Ed_Sullivan_Show" },
  { name: "Robert F. Kennedy being assassinated moments after winning the California primary", date: "1968-06-05", url: "https://en.wikipedia.org/wiki/Assassination_of_Robert_F._Kennedy" },
  { name: "the Kent State shootings", date: "1970-05-04", url: "https://en.wikipedia.org/wiki/Kent_State_shootings" },
  { name: "the Watergate break-in", date: "1972-06-17", url: "https://en.wikipedia.org/wiki/Watergate_scandal" },
  { name: "the Earthrise photo being taken from Apollo 8", date: "1968-12-24", url: "https://en.wikipedia.org/wiki/Earthrise" },
  { name: "Apollo 13's oxygen tank exploding — 'Houston, we've had a problem'", date: "1970-04-11", url: "https://en.wikipedia.org/wiki/Apollo_13" },
  { name: "the Fight of the Century — Ali vs Frazier at Madison Square Garden", date: "1971-03-08", url: "https://en.wikipedia.org/wiki/Fight_of_the_Century_(1971)" },
  { name: "Britain switching to decimal currency", date: "1971-02-15", url: "https://en.wikipedia.org/wiki/Decimalisation" },
  { name: "Nixon ending the gold standard", date: "1971-08-15", url: "https://en.wikipedia.org/wiki/Nixon_shock" },
  { name: "Nixon visiting China — ending 25 years of diplomatic silence", date: "1972-02-21", url: "https://en.wikipedia.org/wiki/Nixon%27s_visit_to_China" },
  { name: "the Munich Olympics massacre", date: "1972-09-05", url: "https://en.wikipedia.org/wiki/Munich_massacre" },
  { name: "the Roe v. Wade decision", date: "1973-01-22", url: "https://en.wikipedia.org/wiki/Roe_v._Wade" },
  { name: "the OPEC oil embargo beginning", date: "1973-10-17", url: "https://en.wikipedia.org/wiki/1973_oil_crisis" },
  { name: "Nixon resigning the presidency", date: "1974-08-09", url: "https://en.wikipedia.org/wiki/Richard_Nixon" },
  { name: "Philippe Petit walking a tightrope between the Twin Towers", date: "1974-08-07", url: "https://en.wikipedia.org/wiki/Philippe_Petit" },
  { name: "the last helicopter out of Saigon ending the Vietnam War", date: "1975-04-24", url: "https://en.wikipedia.org/wiki/Fall_of_Saigon" },
  { name: "Operation Entebbe — Israel rescuing 102 hostages 2,500 miles away in Uganda", date: "1976-07-04", url: "https://en.wikipedia.org/wiki/Entebbe_raid" },
  { name: "the Jonestown mass suicide", date: "1978-11-18", url: "https://en.wikipedia.org/wiki/Jonestown" },
  { name: "the Iran Hostage Crisis beginning", date: "1979-11-04", url: "https://en.wikipedia.org/wiki/Iran_hostage_crisis" },
  { name: "CNN launching as the world's first 24-hour news network", date: "1980-06-01", url: "https://en.wikipedia.org/wiki/CNN" },
  { name: "the Empire Strikes Back premiering — with its twist kept secret from even the cast", date: "1980-05-21", url: "https://en.wikipedia.org/wiki/The_Empire_Strikes_Back" },
  { name: "the Trieste reaching the deepest point in the ocean — the Mariana Trench", date: "1960-01-23", url: "https://en.wikipedia.org/wiki/Trieste_(bathyscaphe)" },
  { name: "the U-2 spy plane being shot down over the Soviet Union", date: "1960-05-01", url: "https://en.wikipedia.org/wiki/1960_U-2_incident" },
  { name: "To Kill a Mockingbird being published", date: "1960-07-11", url: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird" },
  { name: "Echo 1 — the first communications satellite — being launched", date: "1960-08-12", url: "https://en.wikipedia.org/wiki/Echo_1" },
  { name: "the Bay of Pigs invasion failing spectacularly", date: "1961-04-17", url: "https://en.wikipedia.org/wiki/Bay_of_Pigs_Invasion" },
  { name: "the Berlin Wall beginning construction overnight", date: "1961-08-13", url: "https://en.wikipedia.org/wiki/Berlin_Wall" },
  { name: "Alan Shepard becoming the first American in space — in a suit he urinated in", date: "1961-05-05", url: "https://en.wikipedia.org/wiki/Alan_Shepard" },
  { name: "Adolf Eichmann being executed in Israel", date: "1962-05-31", url: "https://en.wikipedia.org/wiki/Adolf_Eichmann" },
  { name: "Marilyn Monroe being found dead at 36", date: "1962-08-05", url: "https://en.wikipedia.org/wiki/Marilyn_Monroe" },
  { name: "Frank Morris and the Anglin brothers escaping from Alcatraz using spoons and papier-mache heads", date: "1962-06-11", url: "https://en.wikipedia.org/wiki/June_1962_Alcatraz_escape_attempt" },
  { name: "the Beatles recording their debut album in a single 10-hour day at Abbey Road", date: "1963-03-22", url: "https://en.wikipedia.org/wiki/Please_Please_Me" },
  { name: "the Civil Rights Act being signed by LBJ", date: "1964-07-02", url: "https://en.wikipedia.org/wiki/Civil_Rights_Act_of_1964" },
  { name: "Australia switching to decimal currency — rejecting the name 'roo' for its new dollar", date: "1966-02-14", url: "https://en.wikipedia.org/wiki/Australian_dollar" },
  { name: "the Soviet Luna 9 achieving the first ever soft Moon landing", date: "1966-02-03", url: "https://en.wikipedia.org/wiki/Luna_9" },
  { name: "the Great Northeast Blackout affecting 30 million people — and causing a baby boom nine months later", date: "1965-11-09", url: "https://en.wikipedia.org/wiki/Northeast_blackout_of_1965" },
  { name: "England winning the World Cup — with a still-debated third goal", date: "1966-07-30", url: "https://en.wikipedia.org/wiki/1966_FIFA_World_Cup_Final" },
  { name: "Dr. Strangelove being released", date: "1964-01-29", url: "https://en.wikipedia.org/wiki/Dr._Strangelove" },
  { name: "the first human heart transplant", date: "1967-12-03", url: "https://en.wikipedia.org/wiki/Heart_transplantation" },
  { name: "the Tet Offensive beginning in Vietnam", date: "1968-01-30", url: "https://en.wikipedia.org/wiki/Tet_Offensive" },
  { name: "Martin Luther King Jr. being assassinated on a Memphis motel balcony", date: "1968-04-04", url: "https://en.wikipedia.org/wiki/Assassination_of_Martin_Luther_King_Jr." },
  { name: "Soviet tanks crushing the Prague Spring", date: "1968-08-21", url: "https://en.wikipedia.org/wiki/Prague_Spring" },
  { name: "Concorde making its first flight", date: "1969-03-02", url: "https://en.wikipedia.org/wiki/Concorde" },
  { name: "Super Bowl I — the first ever Super Bowl game", date: "1967-01-15", url: "https://en.wikipedia.org/wiki/Super_Bowl_I" },
  { name: "the Stonewall Riots beginning in New York", date: "1969-06-28", url: "https://en.wikipedia.org/wiki/Stonewall_riots" },
  { name: "the Manson Family murders — the killings that ended the peace-and-love ethos of the 1960s", date: "1969-08-09", url: "https://en.wikipedia.org/wiki/Tate_murders" },
  { name: "the Vietnam Moratorium — millions of Americans protesting the war in a single day", date: "1969-10-15", url: "https://en.wikipedia.org/wiki/Moratorium_to_End_the_War_in_Vietnam" },
  { name: "the first Earth Day", date: "1970-04-22", url: "https://en.wikipedia.org/wiki/Earth_Day" },
  { name: "Barbie debuting at the New York Toy Fair", date: "1959-03-09", url: "https://en.wikipedia.org/wiki/Barbie" },
  { name: "Howard Hughes flying the Spruce Goose — its only ever flight", date: "1947-11-02", url: "https://en.wikipedia.org/wiki/Hughes_H-4_Hercules" },
  { name: "Israel declaring independence", date: "1948-05-14", url: "https://en.wikipedia.org/wiki/Israeli_Declaration_of_Independence" },
  { name: "the Berlin Airlift beginning — with a plane landing every 30 seconds at its peak", date: "1948-06-26", url: "https://en.wikipedia.org/wiki/Berlin_Blockade" },
  { name: "JFK's PT-109 being sunk — making him a war hero who towed crew members with his teeth", date: "1943-08-02", url: "https://en.wikipedia.org/wiki/PT-109" },
  { name: "ENIAC — the first general-purpose computer — being unveiled", date: "1946-03-06", url: "https://en.wikipedia.org/wiki/ENIAC" },
  { name: "Julius and Ethel Rosenberg being sentenced to death for passing nuclear secrets to the Soviets", date: "1951-04-05", url: "https://en.wikipedia.org/wiki/Julius_and_Ethel_Rosenberg" },
  { name: "Eisenhower warning of the military-industrial complex in his farewell address", date: "1961-01-17", url: "https://en.wikipedia.org/wiki/Military%E2%80%93industrial_complex" },
  { name: "the USS Enterprise — the first nuclear aircraft carrier — being launched", date: "1960-09-24", url: "https://en.wikipedia.org/wiki/USS_Enterprise_(CVN-65)" },
  { name: "the My Lai Massacre in Vietnam", date: "1968-03-16", url: "https://en.wikipedia.org/wiki/My_Lai_Massacre" },
  { name: "NASA unveiling the Space Shuttle Enterprise — renamed by a Star Trek fan write-in campaign", date: "1976-09-17", url: "https://en.wikipedia.org/wiki/Space_Shuttle_Enterprise" },
  { name: "All in the Family premiering on CBS — with Archie Bunker's unironic fans", date: "1971-01-12", url: "https://en.wikipedia.org/wiki/All_in_the_Family" },
  { name: "Mount St. Helens erupting — with one man refusing to evacuate until the end", date: "1980-05-18", url: "https://en.wikipedia.org/wiki/1980_eruption_of_Mount_St._Helens" },
  { name: "Intel releasing the 4004 — the world's first microprocessor", date: "1971-11-15", url: "https://en.wikipedia.org/wiki/Intel_4004" },
  { name: "Telstar — the first active communications satellite — being launched", date: "1962-07-10", url: "https://en.wikipedia.org/wiki/Telstar" },
  { name: "Hitler dying in his Berlin bunker as Soviet forces closed in", date: "1945-04-30", url: "https://en.wikipedia.org/wiki/Death_of_Adolf_Hitler" },
  { name: "Benjamin O. Davis Sr. becoming the first Black general in the US Army", date: "1940-10-25", url: "https://en.wikipedia.org/wiki/Benjamin_O._Davis_Sr." },
  { name: "the United Nations Charter being signed in San Francisco", date: "1945-06-26", url: "https://en.wikipedia.org/wiki/United_Nations_Charter" },
  { name: "the Warsaw Ghetto Uprising beginning — armed with smuggled pistols against tanks", date: "1943-01-18", url: "https://en.wikipedia.org/wiki/Warsaw_Ghetto_Uprising" },
  { name: "the Yom Kippur War beginning with a surprise attack on Israel's holiest day", date: "1973-10-06", url: "https://en.wikipedia.org/wiki/Yom_Kippur_War" },
  { name: "the Amityville murders that spawned a horror franchise", date: "1974-11-13", url: "https://en.wikipedia.org/wiki/Amityville_murders" },
  { name: "Watson and Crick publishing the structure of DNA — using Rosalind Franklin's X-rays without credit", date: "1953-04-25", url: "https://en.wikipedia.org/wiki/Nucleic_acid_double_helix" },
  { name: "the Apollo-Soyuz handshake — the first US-Soviet spacecraft docking in orbit", date: "1975-07-17", url: "https://en.wikipedia.org/wiki/Apollo%E2%80%93Soyuz" },
  { name: "Hong Kong falling to Japan on Christmas Day — Britain's first colonial surrender to an Asian power", date: "1941-12-25", url: "https://en.wikipedia.org/wiki/Battle_of_Hong_Kong" },
  { name: "the Hamara Bajaj campaign — a humble scooter becoming a symbol of the Indian middle class", date: "1999-12-31", url: "https://en.wikipedia.org/wiki/Bajaj_Auto" },
  { name: "India's first colour TV broadcast — watched by most Indians on black and white televisions", date: "1977-07-07", url: "https://en.wikipedia.org/wiki/Doordarshan" },
  { name: "the Delhi Asian Games bringing colour TV to India — with families gathering in streets outside shops", date: "1982-11-25", url: "https://en.wikipedia.org/wiki/1982_Asian_Games" },
  { name: "India liberalising its economy — ending the Ambassador car's decades-long monopoly", date: "1992-02-14", url: "https://en.wikipedia.org/wiki/Economic_liberalisation_in_India" },
  { name: "the Great Ganesh Milk Miracle — when statues across India appeared to drink milk", date: "1995-09-01", url: "https://en.wikipedia.org/wiki/Hindu_milk_miracle" },
  { name: "the Tata Indica launching — India's first fully indigenous car, built after Ford laughed at Tata", date: "1998-04-12", url: "https://en.wikipedia.org/wiki/Tata_Indica" },
  { name: "India issuing a commemorative stamp celebrating its own Independence Day celebrations", date: "1998-08-15", url: "https://en.wikipedia.org/wiki/India_Post" },
  { name: "Chandrayaan-1 discovering water on the Moon", date: "2008-11-03", url: "https://en.wikipedia.org/wiki/Chandrayaan-1" },
  { name: "Chandrayaan-1 launching — India's first Moon mission, for one-sixth the budget of the film Gravity", date: "2008-10-22", url: "https://en.wikipedia.org/wiki/Chandrayaan-1" },
  { name: "the Indian Rope Trick being debunked — 150 years after the original 1890 newspaper hoax", date: "2004-09-18", url: "https://en.wikipedia.org/wiki/Indian_rope_trick" },
  { name: "Sourav Ganguly taking off his shirt at Lord's Cricket Ground after India's NatWest Trophy win", date: "2002-12-11", url: "https://en.wikipedia.org/wiki/Sourav_Ganguly" },
  { name: "India's first multiplex cinema opening in Delhi", date: "1977-06-02", url: "https://en.wikipedia.org/wiki/Multiplex_(movie_theater)" },
  { name: "Sholay being named India's film of the millennium — after bombing in its opening week", date: "1978-12-16", url: "https://en.wikipedia.org/wiki/Sholay" },
  { name: "a Rajasthani folk dance troupe baffling and delighting audiences at the Edinburgh Festival", date: "1998-04-25", url: "https://en.wikipedia.org/wiki/Kachchi_Ghori" },
  { name: "the Amul Girl turning 36 — having commented on every Indian news event since 1966", date: "2001-09-08", url: "https://en.wikipedia.org/wiki/Amul_girl" },
  { name: "India waiting 28 years for its next individual Olympic gold after Moscow 1980", date: "1980-07-23", url: "https://en.wikipedia.org/wiki/Abhinav_Bindra" },
  { name: "India deliberately crashing a probe into the Moon — and celebrating", date: "2008-11-14", url: "https://en.wikipedia.org/wiki/Moon_Impact_Probe" },
];

// ──────────────────────────────────────────────────────────────
// CONSTANTS
// ──────────────────────────────────────────────────────────────
const TOP_N          = 500;
const MONTH_NAMES    = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// ──────────────────────────────────────────────────────────────
// UTILITIES
// ──────────────────────────────────────────────────────────────
function yearOf(dateStr) {
  return parseInt(dateStr.slice(0, 4), 10);
}

function fmtDate(dateStr) {
  const year  = parseInt(dateStr.slice(0, 4), 10);
  const month = parseInt(dateStr.slice(5, 7), 10);
  return `${MONTH_NAMES[month - 1]} ${year}`;
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ──────────────────────────────────────────────────────────────
// SCORING
// ──────────────────────────────────────────────────────────────

// Score = perceived_decades / actual_years.
// Higher score = more surprising (many perceived decades, few actual years).
function surpriseScore(yearA, yearB) {
  const perceivedDecades = Math.abs(Math.floor(yearA / 10) - Math.floor(yearB / 10));
  const actualYears      = Math.abs(yearA - yearB);
  if (perceivedDecades === 0 || actualYears === 0) return null;
  return perceivedDecades / actualYears;
}

function buildTopPairs() {
  const scored = [];
  for (let i = 0; i < events.length; i++) {
    for (let j = i + 1; j < events.length; j++) {
      const yearA = yearOf(events[i].date);
      const yearB = yearOf(events[j].date);
      const score = surpriseScore(yearA, yearB);
      if (score === null) continue;
      scored.push({
        a:       events[i],
        b:       events[j],
        score:   score,
        yearGap: Math.abs(yearA - yearB),
      });
    }
  }
  scored.sort((x, y) => y.score - x.score);
  return scored.slice(0, TOP_N);
}

// ──────────────────────────────────────────────────────────────
// SESSION STATE
// ──────────────────────────────────────────────────────────────
let sessionQueue = [];
let sessionIndex = 0;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function initSession() {
  sessionQueue = buildTopPairs();
  shuffle(sessionQueue);
  sessionIndex = 0;
}

// ──────────────────────────────────────────────────────────────
// RENDERING
// ──────────────────────────────────────────────────────────────
function renderPair(pair) {
  const { a, b, yearGap } = pair;
  const yearA = yearOf(a.date);
  const yearB = yearOf(b.date);

  // Top card = earlier event
  const [top, bottom] = yearA <= yearB ? [a, b] : [b, a];

  const pairDisplay = document.getElementById('pairDisplay');
  pairDisplay.innerHTML = `
    <div class="event-pair">
      <article class="event-card">
        <h2 class="event-name">
          <a href="${escHtml(top.url)}" target="_blank" rel="noopener noreferrer">${escHtml(top.name)}</a>
        </h2>
        <p class="event-date">${fmtDate(top.date)}</p>
      </article>

      <div class="gap-badge" aria-label="${yearGap} ${yearGap === 1 ? 'year' : 'years'} apart">
        <span class="gap-number">${yearGap}</span>
        <span class="gap-label">${yearGap === 1 ? 'year' : 'years'}<br>apart</span>
      </div>

      <article class="event-card">
        <h2 class="event-name">
          <a href="${escHtml(bottom.url)}" target="_blank" rel="noopener noreferrer">${escHtml(bottom.name)}</a>
        </h2>
        <p class="event-date">${fmtDate(bottom.date)}</p>
      </article>
    </div>
  `;
  pairDisplay.hidden = false;
}

// ──────────────────────────────────────────────────────────────
// ENTRY POINT
// ──────────────────────────────────────────────────────────────
function showNext() {
  if (sessionIndex >= sessionQueue.length) {
    const btn = document.getElementById('nextBtn');
    btn.disabled = true;
    btn.textContent = "That's all the surprises for now!";
    return;
  }
  renderPair(sessionQueue[sessionIndex++]);
}

document.addEventListener('DOMContentLoaded', () => {
  initSession();
  document.getElementById('nextBtn').addEventListener('click', showNext);
  showNext();
});
