import { useFish } from './fish/FishDataProvider.js'
import { useTip} from './tips/TipDataProvider.js'
import { useLocation } from './locations/LocationDataProvider.js'


import { FishList } from './fish/FishList.js'
import { TipList } from './tips/TipList.js'
import { LocationList } from './locations/LocationList.js'


FishList()
TipList()
LocationList()