import $actionsheet from './components/mtdm/$actionsheet';
import $dialog from './components/mtdm/$dialog';
import $toast from './components/mtdm/$toast';
import badge from './components/mtdm/badge';
import calendar from './components/mtdm/calendar';
import carouselItem from './components/mtdm/carouselitem';
import cascader from './components/mtdm/cascader';
import actionsheet from './components/mtdm/actionsheet';
import checkboxGoup from './components/mtdm/checkboxGoup';
import checkbox from './components/mtdm/checkbox';
import carousel from './components/mtdm/carousel';
import formItem from './components/mtdm/formItem';
import dialog from './components/mtdm/dialog';
import datePicker from './components/mtdm/datePicker';
import loading from './components/mtdm/loading';
import navigationBar from './components/mtdm/navigationBar';
import picUpload from './components/mtdm/picUpload';
import form from './components/mtdm/form';
import popover from './components/mtdm/popover';
import picker from './components/mtdm/picker';
import button from './components/mtdm/button';
import radio from './components/mtdm/radio';
import pullrefresh from './components/mtdm/pullrefresh';
import input from './components/mtdm/input';
import scrollpicker from './components/mtdm/scrollpicker';
import rate from './components/mtdm/rate';
import radioGroup from './components/mtdm/radioGroup';
import slideModal from './components/mtdm/slideModal';
import selectOption from './components/mtdm/selectOption';
import stepper from './components/mtdm/stepper';
import select from './components/mtdm/select';
import Switch from './components/mtdm/switch';
import tab from './components/mtdm/tab';
import tag from './components/mtdm/tag';
import tabPane from './components/mtdm/tabPane';
import tips from './components/mtdm/tips';
import slider from './components/mtdm/slider';
import popup from './components/mtdm/popup';
const defaultMTDInfo: MTDMInfo = {
  normalComponents: [
    badge,
    calendar,
    carouselItem,
    cascader,
    actionsheet,
    checkboxGoup,
    checkbox,
    carousel,
    formItem,
    dialog,
    datePicker,
    loading,
    navigationBar,
    picUpload,
    form,
    popover,
    picker,
    button,
    radio,
    pullrefresh,
    input,
    scrollpicker,
    rate,
    radioGroup,
    slideModal,
    selectOption,
    stepper,
    select,
    Switch,
    tab,
    tag,
    tabPane,
    tips,
    slider,
    popup,
  ],
  funcComponents: [$actionsheet, $dialog, $toast],
};
export default defaultMTDInfo;
