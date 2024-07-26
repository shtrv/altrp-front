const data = altrpHelpers.getDataByPath("altrpdata.food");

function getfirstavailableid(data) {
    for (const item of data) {
        if (item.available_status === "1" && item.id === null) {
            return item.date_id;
        }
    }
    return null; // Если нет элементов с available_status = 1
}

const firstavailableid = getfirstavailableid(data);
console.log(firstavailableid); // Выводит date_id первого элемента с available_status = 1

// Функция для проверки доступности элемента и его прокрутки
function checkAndScroll() {
    const element = document.getElementById('create_order_section_' + firstavailableid);
    if (element) {
        element.scrollIntoView();
    } else {
        setTimeout(checkAndScroll, 100); // Повторяем проверку через 100 миллисекунд
    }
}

checkAndScroll(); // Начинаем проверку и прокрутку



const data = altrpHelpers.getDataByPath("altrpdata.food");
const CurrentBreakpoint = altrpHelpers.getCurrentBreakpoint();

// Check if the current breakpoint is not 'Tablet', 'Laptop', or 'Desktop'
if (CurrentBreakpoint !== 'Tablet' && CurrentBreakpoint !== 'Laptop' && CurrentBreakpoint !== 'Desktop') {

    function getfirstavailableid(data) {
        for (const item of data) {
            if (item.available_status === "1" && item.id === null) {
                return item.date_id;
            }
        }
        return null; // Если нет элементов с available_status = 1
    }

    const firstavailableid = getfirstavailableid(data);
    console.log(firstavailableid); // Выводит date_id первого элемента с available_status = 1

    // Функция для проверки доступности элемента и его прокрутки
    function checkAndScroll() {
        const element = document.getElementById('create_order_section_' + firstavailableid);
        if (element) {
            element.scrollIntoView();
        } else {
            setTimeout(checkAndScroll, 100); // Повторяем проверку через 100 миллисекунд
        }
    }

    checkAndScroll(); // Начинаем проверку и прокрутку
}