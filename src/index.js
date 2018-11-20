import { sumOfWrappedPairs, sumOfHalfWayWrappedPairs } from './day_01/index.js'
import { checksumForSpreadsheet, sumOfDivisiblePairs } from './day_02/index.js'
import { manhattenDistanceToCenter, spiralCordinatesFor } from './day_03/index.js'

const dayOneInput = '31813174349235972159811869755166343882958376474278437681632495222499211488649543755655138842553867246131245462881756862736922925752647341673342756514856663979496747158241792857625471323535183222497949751644488277317173496124473893452425118133645984488759128897146498831373795721661696492622276282881218371273973538163779782435211491196616375135472517935481964439956844536136823757764494967297251545389464472794474447941564778733926532741752757865243946976266426548341889873514383464142659425122786667399143335772174973128383869893325977319651839516694295534146668728822393452626321892357192574444856264721585365164945647254645264693957898373214897848424966266582991272496771159583715456714645585576641458358326521858518319315233857473695712238323787254556597566461188452279853766184333696344395818615215846348586541164194624371353556812548945447432787795489443312941687221314432694115847863129826532628228386894683392352799514942665396273726821936346663485499159141368443782475714679953213388375939519711591262489869326145476958378464652451441434846382474578535468433514121336844727988128998543975147649823215332929623574231738442281161294838499441799996857746549441142859199799125595761724782225452394593514388571187279266291364278184761833324476838939898258225748562345853633364314923186685534864178665214135631494876474186833392929124337161222959459117554238429216916532175247326391321525832362274683763488347654497889261543959591212539851835354335598844669618391876623638137926893582131945361264841733341247646125278489995838369127582438419889922365596554237153412394494932582424222479798382932335239274297663365164912953364777876187522324991837775492621675953397843833247525599771974555545348388871578347332456586949283657613841414576976542343934911424716613479249893113961925713317644349946444271959375981158445151659431844142242547191181944395897963146947935463718145169266129118413523541222444997678726644615185324461293228124456118853885552279849917342474792984425629248492847827653133583215539325866881662159421987315186914769478947389188382383546881622246793781846254253759714573354544997853153798862436887889318646643359555663135476261863'
console.log('day one - part 1: ', sumOfWrappedPairs(dayOneInput))
console.log('day one - part 2: ', sumOfHalfWayWrappedPairs(dayOneInput))

const dayTwoInput = `737 1866 1565 1452 1908 1874 232 1928 201 241 922 281 1651 1740 1012 1001
339 581 41 127 331 133 51 131 129 95 499 527 518 435 508 494
1014 575 1166 259 152 631 1152 1010 182 943 163 158 1037 1108 1092 887
56 491 409 1263 1535 41 1431 1207 1393 700 1133 53 131 466 202 62
632 403 118 352 253 672 711 135 116 665 724 780 159 133 90 100
1580 85 1786 1613 1479 100 94 1856 546 76 1687 1769 1284 1422 1909 1548
479 356 122 372 786 1853 979 116 530 123 1751 887 109 1997 160 1960
446 771 72 728 109 369 300 746 86 910 566 792 616 84 338 57
6599 2182 200 2097 4146 7155 7018 1815 1173 4695 201 7808 242 3627 222 7266
1729 600 651 165 1780 2160 626 1215 149 179 1937 1423 156 129 634 458
1378 121 146 437 1925 2692 130 557 2374 2538 2920 2791 156 317 139 541
1631 176 1947 259 2014 153 268 752 2255 347 227 2270 2278 544 2379 349
184 314 178 242 145 410 257 342 183 106 302 320 288 151 449 127
175 5396 1852 4565 4775 665 4227 171 4887 181 2098 4408 2211 3884 2482 158
1717 3629 244 258 281 3635 235 4148 3723 4272 3589 4557 4334 4145 3117 4510
55 258 363 116 319 49 212 44 303 349 327 330 316 297 313 67`
console.log('day two - part 1:', checksumForSpreadsheet(dayTwoInput))
console.log('day two - part 2:', sumOfDivisiblePairs(dayTwoInput))

const dayThreeInput = 312051
console.log('day three - part 1', manhattenDistanceToCenter(spiralCordinatesFor(dayThreeInput)))
