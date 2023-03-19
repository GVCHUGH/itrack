export const menu = [
    {
        name:'Home',
        link:'dashboard',
        isVisible:true,
        icon:'assets/images/menu-icons/home.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'Products',
        link:'products',
        isVisible:true,
        icon:'assets/images/menu-icons/products.svg',
        isIconVisible:false,
        hasDropdown:false,
    },
    {
        name:'Regions',
        link:'regions',
        isVisible:true,
        icon:'assets/images/menu-icons/regions.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'Branch',
        link:'branch',
        isVisible:true,
        icon:'assets/images/menu-icons/home.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'Employees',
        link:'',
        isVisible:true,
        icon:'assets/images/menu-icons/group.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Add Employee',
                link:'add-employee',
                isVisible:true,
            },
            {
                name:'View Employee List',
                link:'view-employee-list',
                isVisible:true,
            },
            {
                name:'Import Employee',
                link:'upload-employee',
                isVisible:true,
            }
        ]
    },
    {
        name:'Employees Leaves',
        link:'employees-leaves',
        isVisible:true,
        icon:'assets/images/menu-icons/group.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'App Users',
        link:'app-users',
        isVisible:true,
        icon:'assets/images/menu-icons/app-user.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'Zonal Distributer',
        link:'',
        isVisible:true,
        icon:'assets/images/menu-icons/distributor.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Add Zonal Distributer',
                link:'add-zonal-distributor',
                isVisible:true,
            },
            {
                name:'View Zonal Distributer List',
                link:'view-zonal-distributor-list',
                isVisible:true,
            },
            {
                name:'Import Zonal Distributer',
                link:'upload-zonal-distributor',
                isVisible:true,
            }
        ]
    },
    {
        name:'Area Distributer',
        link:'',
        isVisible:true,
        icon:'assets/images/menu-icons/distributor.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Add Area Distributer',
                link:'add-area-distributor',
                isVisible:true,
            },
            {
                name:'View Area Distributer List',
                link:'view-area-distributor-list',
                isVisible:true,
            },
            {
                name:'Import Area Distributer',
                link:'upload-area-distributor',
                isVisible:true,
            }
        ]
    },
    {
        name:'Retailer',
        link:'',
        isVisible:true,
        icon:'assets/images/menu-icons/store.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Add Retailer',
                link:'add-retailer',
                isVisible:true,
            },
            {
                name:'View Retailer List',
                link:'view-retailer-list',
                isVisible:true,
            },
            {
                name:'Import Retailer',
                link:'upload-retailer',
                isVisible:true,
            }
        ]
    },
    {
        name:'Assets Management',
        link:'assets-management',
        isVisible:true,
        icon:'assets/images/menu-icons/asset-management.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'Due Amount',
        link:'due-amount',
        isVisible:true,
        icon:'assets/images/menu-icons/due-amount.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'Stock',
        link:'stock',
        isVisible:true,
        icon:'assets/images/menu-icons/stock.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'Sample Group',
        link:'sample-group',
        isVisible:true,
        icon:'assets/images/menu-icons/group.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'Forms',
        link:'forms',
        isVisible:true,
        icon:'assets/images/menu-icons/forms.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'Target',
        link:'target',
        isVisible:true,
        icon:'assets/images/menu-icons/target.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'Report',
        link:'attendance-report',
        isVisible:true,
        icon:'assets/images/menu-icons/report.svg',
        isIconVisible:true,
        hasDropdown:false,
    },
    {
        name:'Logout',
        link:'',
        isVisible:false,
        icon:'assets/images/menu-icons/logout.svg',
        isIconVisible:true,
        hasDropdown:false,
    }
]

export const attendanceReport = [
    {
        label:"Attendance Report",
        icon:"assets/images/attendance/attendance-report.svg"
    },
    {
        label:"Visit Report",
        icon:"assets/images/attendance/visit-report.svg"
    },
    {
        label:"Travel Report",
        icon:"assets/images/attendance/travel-report.svg"
    },
    {
        label:"Expense Report",
        icon:"assets/images/attendance/expense-report.svg"
    },
    {
        label:"Order Report",
        icon:"assets/images/attendance/order-report.svg"
    },
    {
        label:"Other Report",
        icon:"assets/images/attendance/other-report.svg"
    },
    {
        label:"Favorite Report",
        icon:"assets/images/attendance/favorite-report.svg"
    },
];


export const attendanceList = [
    'Attendance Compliance Report',
    'Attendance Cut-off Time Report',
    'Consolidated Report',
    'Daily Attendance',
    'Employee Consolidated Monthly Report (PDF)',
    'Employee Consolidated Weekly Report (PDF)',
    'Monthly Attendance'
]