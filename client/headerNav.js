import { Mongo } from 'meteor/mongo';

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session'
import './container.html';
//
let count = 1;

// let number = RateOfChange.find({}).count();
// console.log(number);

// while(count < number){
  Meteor.setInterval(function() {
    Session.set("count", count);
    count ++;
  }, 2000);

  let daysremaining = 93;
  Session.set("daysremaining", daysremaining);

  Meteor.setInterval(function() {
    Session.set("daysremaining", daysremaining);
    daysremaining --;
  }, 8000);
//}

var rateOfChange = [0.7425055431856247, 0.5964522678504226, 0.5493498734404721, 0.6152898870122191, 0.7594892266943418, 1.1358188943556233, 0.5933100525634886, 0.6666511845368603, 0.5586915973067275, 0.7532702034727088, 0.5185688049251548, 0.5915526296208808, 0.4583187535648269, 0.6225813732874653, 0.6630050867884415, 0.5581580998409266, 0.8928714748966798, 0.7566119821453223, 0.6802187712015146, 0.6973165513879902, 0.6570531939538089, 0.4958722207900978, 0.5613379908695435, 0.6136758601940541, 0.7586537188610363, 0.6984420226709201, 0.5899616426147078, 1.1137118384437652, 0.6215613433024234, 0.6604109724711106, 0.6255278727739805, 0.6425190014069804, 0.5926325144410528, 0.46366635134077194, 0.4479629284253508, 0.9072844139414032, 0.850731903464734, 0.44107650541863574, 0.618013777628178, 0.9725516941211712, 0.5268664797870833, 0.7490835460638423, 0.4955259863008123, 0.5597745770017138, 0.6496024018786801, 0.7634381971835721, 0.5215180939335256, 1.0435609344205181, 0.5520125654831998, 0.4619172697101319, 0.6380542568342832, 0.5741470908720653, 0.5809262962441295, 0.6242330347179482, 0.8199860942375344, 0.59510604802572, 0.7685667578582931, 0.6259763329120036, 0.8982328283486958, 0.6732401307247643, 0.5569821169009819, 0.8659799470037586, 0.5538011768495618, 0.4443178234256386, 0.5539470314570059, 0.6729103217608594, 1.0871377266276545, 0.9930762423694667, 0.36831413824915465, 0.6443211408281635, 0.6514426875160619, 0.7348220903796838, 0.6153966492849713, 0.638219560830871, 0.5472465747103261, 0.5104065886985251, 0.7141135767105133, 0.6223441198240789, 0.5214870322209972, 0.4719070977194213, 0.9758464079099526, 0.5429880972345001, 0.5643355512529277, 0.5685059133074327, 0.7464946862643669, 0.5197659638027397, 0.5423793964086713, 0.5518140209071756, 0.46672313739764276, 0.520383178026818, 0.6624870814030331, 0.756821627399321, 0.5652394930649185, 0.5780482394530959, 0.6135471100394118, 0.644641085604387, 0.6336243107441142, 0.6270134209657213, 0.681515830908179, 0.582794956353594, 0.578240938929626, 0.6759524225032915, 0.6188911650099994, 0.47048132458664244, 0.5273510236919863, 0.4648234703748605, 0.4784494701153231, 0.5940721518466123, 0.6343415741792532, 0.5632908702941322, 0.6719246619735048, 0.5685342652777526, 0.5906521615533431, 0.5776316900699497, 0.49510791238255214, 0.6833058145310558, 0.7046577723936513, 1.0656757677323254, 0.7075753528923423, 0.8049598487561405, 0.5007788451949484, 0.6566208940500955, 1.0543104907491696, 0.5175640100148386, 0.8879042386966997, 0.6964245711881538, 0.5766930298731056, 0.4365914012182305, 0.6490627788305378, 0.6942496305081534, 0.6653721820265737, 0.6633965463489928, 0.7649570668502134, 0.5695227715773817, 0.49490187904171906, 1.041000369042775, 0.4908308502924916, 0.9662151704028324, 0.32929879471079637, 0.585678698040684, 0.6534507614552642, 0.5823643648086269, 0.690084197079682, 0.5329988431386345, 0.90991481845482, 0.5554016540958935, 0.5664055688839222, 0.6973929756731504, 0.4619709821521797, 0.4935269560717618, 0.6285719094113669, 0.4224521856940372, 0.4530152254310402, 0.5922542715268165, 1.070550205275926, 0.7863734263676242, 0.715244584379384, 0.7346465956985937, 0.46154600377248955, 0.588942379807381, 1.110769318880198, 0.6886522304340559, 0.5141343970459533, 0.649194062858423, 0.6947217683526556, 0.5853055951554057, 0.5793446483024632, 0.8282933982263458, 0.7554165834305384, 0.6749854823374773, 0.707864171911921, 0.5976674980604154, 0.5170893422395615, 1.0009264400427151, 0.544176138318063, 0.49660199882651557, 0.5068849820190614, 0.5652588908263678, 1.051709817304838, 0.7608026649221113, 0.5755463666477914, 0.5568438689200572, 0.4212325946082116, 0.6947062754007974, 0.642454440347201, 0.5333230937107535, 0.915722103198771, 0.6920387373283743, 0.6290591714851445, 0.6615379403807481, 0.5708687935889717, 0.5914796630174967, 0.5800433353161517, 0.7104174903274866, 0.5862872894873805, 0.6616686809271407, 0.677368192616636, 0.5503547017348581, 0.6525103030638557, 0.5145085695491916, 0.7863972865195046, 0.6383806578948844, 0.6859838344084852, 0.6269408308531536, 0.47105469908038444, 0.6963899748331687, 0.48938517915195157, 0.5925026011669979, 0.4785131830420103, 0.5529592044261314, 0.5165619341715209, 0.9382748703618277, 0.4910888327734886, 0.6441509194339966, 0.44917435015213825, 0.4549690564306186, 0.5208924112172747, 0.6787200165469505, 0.4773066669197196, 0.5574532919860788, 0.5770886171612603, 0.889188157245449, 0.6745014498027497, 0.5963229547457876, 0.6090125421776936, 0.5064216145333632, 0.5672286491596521, 0.7830376719232929, 0.45371996904041134, 0.6755297572932657, 0.5580954241367102, 0.6891241699215456, 0.586211370893439, 1.0884566161055522, 0.5128402087571238, 0.8053927980048262, 0.5104290776680733, 0.6338318913892643, 0.5932157644349019, 0.6587119573811818, 0.768419344340967, 0.37870256545788916, 0.5874205476653473, 1.0320020265256833, 0.555903003980766, 0.64437704969114, 0.9595877711517247, 0.7504796403137766, 0.5790673133353539, 0.4478848360544675, 0.3724535631616715, 0.6251030909675174, 0.6337980472097016, 0.4371629674005204, 0.801817730631939, 0.5482326101764912, 0.5017517797094319, 0.6641518864490454, 0.5378768882254756, 0.5682993761961561, 0.4000852033906587, 0.764467828021611, 0.49079982616489026, 0.5204686233260601, 0.7510004369420773, 0.5756032850875602, 0.9373628902163392, 0.6036103314535274, 0.626903472543019, 0.6340431583327693, 0.47471519969181203, 0.5943225947050474, 0.5071788070898136, 0.5693104626866771, 0.5733492626284931, 0.4589605671912376, 0.48695026366925487, 0.6097402241117219, 0.4600906392390762, 0.7915927838476311, 0.9417135262977165, 0.47276156564487004, 0.7403024416876763, 0.5371350236371161, 0.5343987199288034, 0.5698912935304233, 0.5817849719571105, 0.36132165997603727, 0.5938178104488626, 0.9107039238523966, 0.6153299324394522, 0.5543451724987107, 0.5484077465088995, 0.394975030066015, 0.7336521291952219, 1.20760195281628, 0.46922097949024333, 0.719050309983875, 0.709654348939012, 0.6641061908794563, 0.46573742857777933, 0.5943930506993385, 0.6997162619028314, 0.7316430675406258, 0.5780178126226294, 0.5176465094422802, 0.6498899189464575, 0.5114876292365709, 0.47747061282332975, 1.1289427721732268, 0.5414356273245475, 0.5025988491326671, 0.4043337271379329, 0.4446903997327675, 0.666968408663098, 0.4207605697772875, 0.6149356864335298, 0.6611099582272565, 0.6773924800465614, 0.666708453767381, 0.508155761931461, 0.6567098071851261, 0.6342591639415786, 0.5970573066924371, 0.6792084257259099, 0.5867900061407487, 0.5629549901391244, 0.5101532668174606, 0.5378729226593791, 0.5409622382847953, 0.6020876517363348, 0.6768586528014703, 0.41686244398463984, 0.5490971348633283, 0.6948515318140055, 0.617164416014971, 0.5616032169381978, 0.6020645800857158, 0.7102243586238609, 0.6355229295237433, 0.7905800403218354, 0.634776668969009, 0.7125860904011342, 0.49921501936998186, 0.49619255879293256, 1.0614863386063922, 0.6594853843120548, 1.1078245379048655, 0.7961197436779114, 0.6953177175012947, 0.511342122539922, 0.6069057558746415, 0.9236003621740014, 0.5360778727781124, 0.558805799929362, 0.9123635878532809, 0.8176396456173496, 0.6276955807445306, 0.5324549741518178, 0.5395496830880762, 1.172906899015518, 1.0521898614745813, 1.073402260490326, 0.5386677158427465, 0.6517367244167788, 1.1976770745348406, 0.7035943529098722, 0.7809399091921899, 0.47919257602496984, 0.9981646712744177, 0.4638964294883855, 0.8690016571710049, 0.6140603831763145, 0.6107463788862943, 0.6024876237086095, 0.704967712164007, 0.580506814446122, 0.9914332962513591, 0.7852438162450938, 0.6967190238782476, 0.601812946821159, 0.6881602250986708, 0.6850175024987116, 0.5963012490705973, 0.44668038320153425, 0.9827538178881909, 0.7161350361475567, 0.6142118201490189, 0.6077760642271951, 0.9239623535380562, 0.4596182270332957, 0.5835703469134963, 0.5472602416150751, 0.6643371222475647, 0.561791874562638, 1.0089702709197501, 0.5465264156770946, 0.6488398144562199, 0.707536587289711, 0.6383992475291188, 0.5634326918944196, 0.6507914568150889, 0.6385952866699883, 0.6267124787412701, 0.4939001027322477, 0.7940705713366166, 0.5153641910835947, 1.0450735274982363, 0.7634075047792177, 0.3873193689555088, 0.7011255061975009, 0.6172947012295773, 0.6596916860948052, 0.6089492102930607, 0.6433200641695901, 0.46476878464865123, 0.8110868985846416, 0.5064573969964044, 0.5127368249078192, 0.5758012813002884, 0.5355849896370383, 0.5322564160972318, 0.6467441196970621, 0.8666467072228825, 0.6003528520110698, 0.7273985809322446, 0.5329908977798021, 0.6296881207969394, 0.6002753524229913, 0.7670432827415421, 0.5896346488198909, 1.1679334742083434, 0.6292259599710017, 0.8051346307033445, 0.6607503409141182, 0.7175624594535335, 0.46327799060008046, 0.508206973400032, 0.5856830219705944, 0.3649067006261114, 0.5971920511304772, 0.5396042862734314, 0.45079751373229293, 0.6957883799336777, 0.6145242456278557, 0.7095885969336573, 0.6928543342918081, 0.816931517697295, 0.8924496681433371, 0.6975272026625403, 0.7607363677235008, 0.750566127176827, 0.6157563136374333, 0.557005789817747, 0.666233461769666, 0.9334784438774612, 0.5961973003272903, 0.651377673516545, 0.7086849887905676, 0.5276592660608158, 0.4081491899873332, 0.6634393804704212, 0.5284450421789689, 0.6225901511322312, 0.5209921095940082, 0.7229541471027313, 0.5553230737841693, 0.463252014800786, 0.46690957950188594, 0.6338215576342806, 0.49069412316077377, 0.5807771653655756, 0.5066844825918951, 0.5986598310917269, 0.5506847005762464, 0.5278086714909933, 0.7012930543608142, 0.4608860158468182, 0.56790137959227, 0.5992800950074958, 0.6806025950849655, 0.5142525502010028, 0.6677508607738516, 0.6527684737604149, 0.5688918222244801, 0.5283033941838119, 0.9096075764084991, 0.7209887038791642, 0.7338877510551837, 0.7040275145034692, 0.5934784485468564, 0.6357476529533459, 0.6353016520906645, 0.5971729049576956, 0.9251913140864094, 0.5117764334447852, 0.9656662338082428, 0.5380782155007671, 0.531990143423547, 0.7254950178196651, 0.7645218073760887, 0.648881666576538, 0.5538450387333085, 0.5609496382851895, 0.4677828925578653, 0.8197223190964112, 0.6906898965970203, 0.6412628924120366, 0.540229522894796, 0.6243504316648104, 0.601617218558283, 1.0587833624567922, 0.5448363695850287, 0.608717264003506, 0.4401391472891403, 0.5917822519264107, 0.734257504028714, 0.6033651068700671, 0.7127046454920741, 0.6869019651626167, 0.5185485533647354, 0.9548162710995449, 0.5854600500264185, 0.5283302459217659, 0.6093685840762704, 1.1497582627358454, 0.5129755741324109, 0.5571918861640983, 0.5753897772240997, 0.6388447026012214, 0.6657315813178899, 0.646373170135581, 0.6155022569670813, 0.5757086130421997, 0.42347409531882085, 0.9168017245753393, 0.7834694293117745, 0.5252566354109929, 0.7357146743585947, 0.5932978766976047, 0.5019678359381634, 0.7031579162228885, 0.6266930795778604, 0.5955732735177469, 0.7020086715928235, 0.39614633351764994, 0.5258748536566858, 0.8841105282725021, 0.5976927188050255, 0.7513135147519276, 0.5534995871449924, 0.7172780498636055, 0.636737836230959, 0.6975795714167905, 0.5397263987576835, 0.5670326929345826, 0.5355515064007146, 0.47497943755914684, 0.42083821366081575, 0.49763299547466294, 0.5523380904539524, 0.5171882532408622, 0.9155898208084058, 0.5948557581590074, 0.5516287951871949, 0.8025104940614359, 0.5198483028631338, 0.9952216629159831, 0.6380366089259086, 0.9501002465904159, 0.6459470426241225, 0.7387811474420234, 0.501851607646086, 0.622239717315644, 0.9533286815162115, 0.575808094879402, 1.044658119581772, 0.9710197498283022, 0.6184570476556225, 0.9365655242584655, 0.5445885922174636, 0.47138874224275157, 1.1298755713878594, 0.6664597232694645, 0.4612257645133203, 0.8443753974817411, 0.4656870465527075, 0.503860767980212, 0.5536478304003217, 0.45689111323343073, 1.097015562223926, 0.5670634342458539, 0.5411138446728513, 0.5017802532066464, 0.45119292336915295, 0.7643252312621508, 1.0252432362565718, 0.4688765607768308, 0.5242244206461475, 0.6275955407950088, 0.5535652874164024, 0.5506574467140372, 0.42857190904217163, 0.4656187016456771, 0.6423710311469198, 0.460183367869874, 1.1139558333232198, 0.5338346274902036, 0.6225432211080526, 0.968655842902754, 0.479849571012312, 0.9614267226607811, 0.708577961764789, 0.5961881070532069, 0.5798941894947743, 0.6193034003504497, 0.6139463742557879, 0.7060560547264525, 0.6336446297096598, 0.47248018979396317, 0.6407248760251729, 1.1849343614378438, 1.2329864452827684, 0.7423185918415915, 0.5685464936627526, 0.3950097617972135, 0.6183474657597932, 0.6016765261188952, 0.5592354937369554, 0.4608331753740135, 0.5740207220640147, 0.49194714439689546, 0.6688472986022614, 0.7534618573278123, 0.5683826440749902, 0.4891223460405136, 0.5025912285988934, 0.5307935964951251, 0.6903319736358025, 1.022261370516762, 1.0146616074922394, 0.737307540636255, 0.628254950850924, 0.6292716198295535, 0.7394459238461312, 1.015759913385603, 0.5797086081696408, 0.5418595358062961, 0.4501561866683834, 0.7303472382092704, 0.5667158376508357, 0.6888132282486699, 1.0357471331137877, 0.8064074105656269, 0.5530995434154133, 0.7687744760518067, 0.5763043423658244, 0.45753395337689307, 0.674032792178456, 0.7328969055759309, 0.5657903456816955, 0.525168609494497, 0.6512095342804938, 0.4349757175513365, 0.4964471321952333, 0.8200688630298028, 0.527384260072945, 0.481781083158811, 0.8013235924114475, 0.6242606777135951, 1.0598366419513177, 0.5136432376309891, 0.6100502868713098, 0.4659924934424, 0.4427514096286973, 0.49572635391008457, 0.6888461268000629, 0.6342169519202141, 0.6576969902043641, 0.5835304268532102, 0.8118695313020465, 0.839089060955624, 0.397129852833829, 0.6069176942398171, 0.5395870017335577, 0.6825534228057255, 0.6075267199556831, 0.975585240515666, 0.9991305626052283, 0.5584057332148689, 0.6482574310642064, 0.9262046741594718, 0.5014333195751866, 0.6696828582243828, 0.603170299009217, 1.1699766174729231, 0.5532725333987092, 0.7343416352450023, 0.6189901993721093, 0.636434457245291, 0.7234030888319193, 0.7815011160937247, 1.08613710410989, 0.7001642578018062, 0.6384277362481493, 0.542696403967773, 0.470608954490048, 0.6108602047722755, 0.7097871321199152, 0.46447226393395713, 0.6340075736463642, 0.6613421546425535, 0.6507256258836132, 0.5460485663515207, 0.6014626509678569, 0.7040724520844694, 0.6112221639604694, 0.5121348932066071, 0.42671596597080136, 0.8620491397499801, 0.5704837588895896, 0.6223909781155637, 0.8990572367265681, 0.4409007530724982, 0.569503821014812, 0.586952528696564, 0.5193837712172044, 0.624051167382618, 0.6041920389027805, 0.4708668431422809, 0.7405442046394813, 0.5820363803033979, 0.949117374089905, 0.7499427439670479, 0.6079292334429208, 0.4958339288779981, 0.7787280681260735, 0.5357852372846034, 0.6356843102654918, 0.6580479132856246, 0.7104553039039129, 0.4164594832633268, 0.8011805103369796, 0.49699582520435176, 0.6163899977999812, 0.6486159349008048, 1.124202973339758, 0.6200682716953805, 0.5604448448589394, 0.7270716105519791, 0.6659457305856249, 0.7896078451780515, 0.5868275842434089, 0.6765131165467022, 0.4932348469812214, 0.948869553880652, 0.7621585780507485, 0.7648990702369352, 0.6733373337398045, 0.5380772845907605, 0.5372196583826795, 0.6383412918489555, 0.6875455762781439, 0.7071634015263198, 0.6122283963610735, 0.6762001124670122, 0.6668542210929708, 0.6009503601390611, 0.46763968706113646, 0.5826303728292849, 0.65024064377346, 0.5693917930841026, 0.723234851463704, 0.6032590183540184, 0.6672266263679589, 0.5224103876375671, 0.7609579886514606, 0.38926605786650215, 0.5612871317962798, 0.47645433304468476, 0.6143154406215766, 0.6829633397931968, 0.5213869414996063, 0.824309300850916, 0.5548223671748613, 0.5982983258895215, 0.509524591117382, 1.0413385039064589, 0.5572993793297837, 0.608872917650878, 0.5176997122012756, 0.5982073504752705, 0.6688491786199878, 0.5903129482152576, 0.9126726282313169, 0.674642461298969, 0.7201678317897514, 0.6694949361893492, 0.7598050487611339, 0.4745606893139527, 0.3905351604186851, 0.5904769157154054, 0.5760539748471522, 0.5087337885906925, 0.4418591668168603, 0.47379347026639773, 0.6995396429130979, 0.6304050466026611, 0.8055920944603375, 0.6890684190527991, 0.9565552361319044, 0.5515040379987706, 0.6776482835786108, 0.5987107007373665, 0.702093273300864, 0.5880481256216581, 0.6876064978361023, 0.7129463014040055, 0.5760198384308685, 1.1169542042154619, 0.7556618104648747, 1.029668914943697, 0.6327443200989746, 1.020969912432456, 0.6915986201548612, 0.5552716332373532, 0.5982260114597046, 0.6820861534669991, 0.8782063031042757, 0.5476752322755232, 0.8150520330043358, 0.4796693056959206, 0.6165786261416687, 0.5233399073417069, 0.45973976557327567, 0.5516698639341306, 0.40327235474928275, 0.9421151125611735, 1.0332065756293718, 0.5384332508045756, 1.3369238607580378, 0.4058115940624857, 0.6274352688005752, 0.5604479649838209, 0.6140161086113014, 0.5367705240087851, 0.7072044524060104, 0.4764037450925651, 1.0442927091259755, 0.7214730622969956, 0.6452198474714471, 0.5530160283127431, 0.5068582694025712, 0.6563804934919166, 0.6343742091070721, 0.7100013475382325, 0.5476375131900343, 0.4981024815697678, 0.4955511574818748, 0.6411665388853903, 0.7098393480888037, 0.7501754193921268, 0.6925017849410294, 0.9104137693048361, 0.4145984460078316, 1.132016312880492, 0.5486781205745828, 0.6034530828623008, 0.5255602627736096, 0.44676685070265465, 0.5500990002687586, 0.7475774909989817, 0.553001191001227, 0.6550102472757567, 0.48586344465229814, 0.6313949778305218, 0.5699096315974915, 0.5940727466745525, 0.7501844883501736, 0.590133927881201, 0.6630999967246817, 0.6973492397270756, 0.6380390995906722, 0.5721224901141817, 0.47202244447690134, 0.4739833612310117, 0.6631845584465086, 0.6106334173589592, 0.6164306456574696, 0.7036730960784287, 0.6019504495248855, 0.5521503502714579, 0.6202293168802478, 0.6144751411096695, 0.674453072177706, 0.6128341818127935, 0.6841911348368698, 0.6038503421110603, 0.8331246641537013, 0.7474220568285831, 0.6027372061468378, 0.45162761496193915, 0.6098097272058266, 0.6052389799281009, 0.6198160801675316, 0.6833359931716829, 0.5875821032201798, 0.6129651294027413, 0.5184257896969722, 0.6181883361009034, 0.7590787099463593, 0.4638852207833175, 0.6196520002338549, 0.625726565221223, 0.49806147026721537, 0.45669292921891147, 0.5911074950868875, 0.5119518819544383, 0.7336714953911571, 0.6182328227992305, 0.46759911481511884, 0.8068378801692627, 0.9826939653515402, 0.5333165580534813, 0.7217337224737982, 0.5744098601732421, 0.7247724390230343, 0.5140368988480497, 0.5703515386200174, 0.48875065956644587, 0.7075343018858378, 0.7958599909245956, 0.6821384423833458, 0.7485099001142574, 0.7176825273031303, 0.7679849467304374, 0.4176310372891222, 0.4943686420895895, 0.6639915523782434, 0.6678201051132339, 0.7854348589477714, 0.5652634567858223, 0.38932136054908495, 0.509895035142582, 0.5718133094972477, 0.6106551039548027, 0.6102569204994872, 0.520720560028946, 0.6424719614202469, 0.55033670053832, 0.5859431193805004, 0.6888996324643689, 0.4397004430129499, 0.5424326717676875, 0.579128933850345, 0.6144058936630338, 0.5885524472968771, 0.6377153997176963, 0.813654617794468, 0.5131822863673133, 0.6001392906869831, 0.5404114312394999, 0.572503957564463, 0.4298816710212463, 0.5604043252934579, 0.5965401769463569, 0.9915258002782433, 0.6140113326918107, 0.6154185024969401, 0.5869720321281335, 0.6950505354208197, 0.48416302914606424, 0.4824965692386693, 0.7203676106636466, 0.8189744322843491, 0.5091600433909866, 0.3961476094524785, 0.4923111539989899, 0.7415889975640438, 0.6573882605029494, 0.6592041910630874, 0.605029664054758, 0.5895477774686919, 0.7850278806565354, 0.7931035574025265, 0.6382757633998484, 0.6006117107600283, 0.5243659023774297, 0.43914971183252016, 0.8274543504120382, 0.5436948577121646, 0.6595104349418267, 0.6475784386988936, 0.49972197965434373, 0.6479029907338489, 1.085230010818331, 0.45772157756324905, 0.5754280251424602, 0.7244230958538123, 0.6512521384834661];

let newArray = [];
rateOfChange.forEach(function(item, value){
  item = item * 10;
  newArray.push(+item.toFixed(2));
});


Template.headerNav.helpers({
  rateOfChange() {
    let updated = 0.3;
    let count = Session.get("count");
      if(newArray[count]){
        let updated = newArray[count];
        Session.set("Rate_of_change", updated);
        return updated;
      }
    return updated;
  },
  daysUntilShutdown() {
    let countDown  = Session.get('daysremaining');
    if(countDown > 0){
      return countDown;
    } else if (coundown === 0) {
      return "Shutdown date";
    } else{
      return "Shutdown in progress"
    }
  },
  plannedDate() {
    return '24 July';
  },
  isAlert(){
    if(Session.get("Rate_of_change") > 6){
      console.log("true");
      return "alert";
    }
  }
});

Template.headerNav.events({
  'click img'(){
    alert('this is working');
  },
});

//called before your template’s logic is evaluated for the first time
Template.headerNav.onCreated(function () {
  Session.setDefault('daysremaining', 93);
});

//called once when an instance of Template.myTemplate is rendered into DOM nodes and put into the document for the first time
Template.headerNav.onRendered(function () {
  // This can be a good place to apply any DOM manipulations you want, after the template is rendered for the first time.
  // use 'this' to access the template instance.
  // this.$('[data-toggle="tooltip"]').tooltip();
});

//an occurrence of a template is taken off the page for any reason and not replaced with a re-rendering.
Template.headerNav.onDestroyed(function () {
  // use 'this' to access the template instance.
});
