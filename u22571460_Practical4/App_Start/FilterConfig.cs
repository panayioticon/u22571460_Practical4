﻿using System.Web;
using System.Web.Mvc;

namespace u22571460_Practical4
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
