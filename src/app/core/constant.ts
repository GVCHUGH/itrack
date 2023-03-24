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
        hasDropdown:true,
        dropDown:[
            {
                name:'Add Product',
                link:'add-product',
                isVisible:true,
            },
            {
                name:'View Product',
                link:'view-product',
                isVisible:true,
            },
            {
                name:'Upload Product',
                link:'upload-product',
                isVisible:true,
            },
        ]
    },
    {
        name:'Regions',
        link:'',
        isVisible:true,
        icon:'assets/images/menu-icons/regions.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Add Region',
                link:'add-region',
                isVisible:true,
            },
            {
                name:'View Region',
                link:'view-region',
                isVisible:true,
            }
        ]
    },
    {
        name:'Branch',
        link:'',
        isVisible:true,
        icon:'assets/images/menu-icons/branch.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Add Branch',
                link:'add-branch',
                isVisible:true,
            },
            {
                name:'View Branch',
                link:'view-branch',
                isVisible:true,
            },
            {
                name:'Upload Branch',
                link:'upload-branch',
                isVisible:true,
            },
        ]
    },
    {
        name:'Area',
        link:'',
        isVisible:true,
        icon:'assets/images/menu-icons/area.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Add Area',
                link:'add-area',
                isVisible:true,
            },
            {
                name:'View Area',
                link:'view-area',
                isVisible:true,
            },
            {
                name:'Upload Area',
                link:'upload-area',
                isVisible:true,
            },
        ]
    },
    {
        name:'Master',
        link:'',
        isVisible:true,
        icon:'assets/images/menu-icons/master.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Settings',
                link:'settings',
                isVisible:true,
            },
            {
                name:'Build Attendance Site',
                link:'build-attendance-site',
                isVisible:true,
            },
            {
                name:'Upload Sales',
                link:'upload-sales',
                isVisible:true,
            },
            
            {
                name:'Visits',
                link:'visits',
                isVisible:true,
            },
        ]
    },
    {
        name:'Category',
        link:'',
        isVisible:true,
        icon:'assets/images/menu-icons/category.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Add Category',
                link:'add-category',
                isVisible:true,
            },
            {
                name:'Add Extra Expenses Category',
                link:'add-extra-expenses-category',
                isVisible:true,
            },
            {
                name:'Add Visit Purpose Category',
                link:'add-visit-purpose-category',
                isVisible:true
            },
            {
                name:'View Visit Purpose Category',
                link:'view-visit-purpose-category',
                isVisible:true
            },
            {
                name:'View Category',
                link:'view-category',
                isVisible:true
            },
            {
                name:'Add Role',
                link:'add-role',
                isVisible:true
            },
            {
                name:'View Role',
                link:'view-role',
                isVisible:true
            },
            {
                name:'View Extra Expenses Category',
                link:'view-extra-expenses-category',
                isVisible:true
            },
            {
                name:'Add Task Name',
                link:'add-task-name',
                isVisible:true
            },
            {
                name:'View Task Name',
                link:'view-task-name',
                isVisible:true
            }
        ]
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
                name:'Upload Employee',
                link:'upload-employee',
                isVisible:true,
            }
        ]
    },
    {
        name:'Employees Leaves',
        link:'employees-leaves',
        isVisible:true,
        icon:'assets/images/menu-icons/leaves.svg',
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
        icon:'assets/images/menu-icons/area-distributor.svg',
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
        link:'',
        isVisible:true,
        icon:'assets/images/menu-icons/forms.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Create Form',
                link:'create-form',
                isVisible:true,
            },
            {
                name:'View Forms',
                link:'view-forms',
                isVisible:true,
            },
            {
                name:'View Submitted Forms',
                link:'view-submitted-forms',
                isVisible:true,
            }
        ]
    },
    {
        name:'Target',
        link:'target',
        isVisible:true,
        icon:'assets/images/menu-icons/target.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Add Targets',
                link:'add-targets',
                isVisible:true,
            },
            {
                name:'View Targets',
                link:'view-targets',
                isVisible:true,
            },
            {
                name:'Import Targets',
                link:'upload-targets',
                isVisible:true,
            },
            {
                name:'Add Default Targets',
                link:'add-default-targets',
                isVisible:true,
            },
            {
                name:'Target Performance Report',
                link:'target-performance-report',
                isVisible:true,
            },
            {
                name:'Dealer Wise Targets',
                link:'dealer-wise-targets',
                isVisible:true,
            },
            {
                name:'Product Wise Targets',
                link:'product-wise-targets',
                isVisible:true,
            }
        ]
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
    },
    {
        name:'Dealer',
        link:'',
        isVisible:true,
        icon:'assets/images/menu-icons/dealer.svg',
        isIconVisible:true,
        hasDropdown:true,
        dropDown:[
            {
                name:'Pre Booking Configuration',
                link:'pre-booking-configuration',
                isVisible:true,
            },
            {
                name:'Build Team',
                link:'build-team',
                isVisible:true,
            },
            {
                name:'View Dealer',
                link:'view-dealer',
                isVisible:true,
            },
            {
                name:'View Email Templates',
                link:'view-email-template',
                isVisible:true,
            },
            {
                name:'View Users',
                link:'view-users',
                isVisible:true,
            },
            {
                name:'View Customer',
                link:'view-customer',
                isVisible:true,
            },
            {
                name:'Add New Scheme',
                link:'add-new-scheme',
                isVisible:true,
            },
            {
                name:'View Scheme',
                link:'view-scheme',
                isVisible:true,
            },
            {
                name:'View App Users',
                link:'view-app-users',
                isVisible:true,
            }
        ]
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