﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.GEN
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Данные орг.
    /// </summary>
    // *** Start programmer edit section *** (ДанныеОрг CustomAttributes)

    // *** End programmer edit section *** (ДанныеОрг CustomAttributes)
    [AutoAltered()]
    [Caption("Данные орг")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДанныеОргE", new string[] {
            "НомерСтроки as \'Номер строки\'",
            "Email as \'Email\'",
            "Наименование as \'Наименование\'",
            "ИНН as \'ИНН\'",
            "ОГРН as \'ОГРН\'",
            "Телефон as \'Телефон\'",
            "ОПФ as \'ОПФ\'",
            "ЮрАдрес as \'Юр адрес\'"})]
    [View("ДанныеОргL", new string[] {
            "НомерСтроки as \'Номер строки\'",
            "Email as \'Email\'",
            "Наименование as \'Наименование\'",
            "ИНН as \'ИНН\'",
            "ОГРН as \'ОГРН\'",
            "Телефон as \'Телефон\'",
            "ОПФ as \'ОПФ\'",
            "ЮрАдрес as \'Юр адрес\'"})]
    public class ДанныеОрг : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерСтроки;
        
        private string fEmail;
        
        private string fНаименование;
        
        private int fИНН;
        
        private int fОГРН;
        
        private int fТелефон;
        
        private string fОПФ;
        
        private string fЮрАдрес;
        
        // *** Start programmer edit section *** (ДанныеОрг CustomMembers)

        // *** End programmer edit section *** (ДанныеОрг CustomMembers)

        
        /// <summary>
        /// Email.
        /// </summary>
        // *** Start programmer edit section *** (ДанныеОрг.Email CustomAttributes)

        // *** End programmer edit section *** (ДанныеОрг.Email CustomAttributes)
        [StrLen(255)]
        public virtual string Email
        {
            get
            {
                // *** Start programmer edit section *** (ДанныеОрг.Email Get start)

                // *** End programmer edit section *** (ДанныеОрг.Email Get start)
                string result = this.fEmail;
                // *** Start programmer edit section *** (ДанныеОрг.Email Get end)

                // *** End programmer edit section *** (ДанныеОрг.Email Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДанныеОрг.Email Set start)

                // *** End programmer edit section *** (ДанныеОрг.Email Set start)
                this.fEmail = value;
                // *** Start programmer edit section *** (ДанныеОрг.Email Set end)

                // *** End programmer edit section *** (ДанныеОрг.Email Set end)
            }
        }
        
        /// <summary>
        /// ИНН.
        /// </summary>
        // *** Start programmer edit section *** (ДанныеОрг.ИНН CustomAttributes)

        // *** End programmer edit section *** (ДанныеОрг.ИНН CustomAttributes)
        public virtual int ИНН
        {
            get
            {
                // *** Start programmer edit section *** (ДанныеОрг.ИНН Get start)

                // *** End programmer edit section *** (ДанныеОрг.ИНН Get start)
                int result = this.fИНН;
                // *** Start programmer edit section *** (ДанныеОрг.ИНН Get end)

                // *** End programmer edit section *** (ДанныеОрг.ИНН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДанныеОрг.ИНН Set start)

                // *** End programmer edit section *** (ДанныеОрг.ИНН Set start)
                this.fИНН = value;
                // *** Start programmer edit section *** (ДанныеОрг.ИНН Set end)

                // *** End programmer edit section *** (ДанныеОрг.ИНН Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (ДанныеОрг.Наименование CustomAttributes)

        // *** End programmer edit section *** (ДанныеОрг.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (ДанныеОрг.Наименование Get start)

                // *** End programmer edit section *** (ДанныеОрг.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (ДанныеОрг.Наименование Get end)

                // *** End programmer edit section *** (ДанныеОрг.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДанныеОрг.Наименование Set start)

                // *** End programmer edit section *** (ДанныеОрг.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (ДанныеОрг.Наименование Set end)

                // *** End programmer edit section *** (ДанныеОрг.Наименование Set end)
            }
        }
        
        /// <summary>
        /// НомерСтроки.
        /// </summary>
        // *** Start programmer edit section *** (ДанныеОрг.НомерСтроки CustomAttributes)

        // *** End programmer edit section *** (ДанныеОрг.НомерСтроки CustomAttributes)
        public virtual int НомерСтроки
        {
            get
            {
                // *** Start programmer edit section *** (ДанныеОрг.НомерСтроки Get start)

                // *** End programmer edit section *** (ДанныеОрг.НомерСтроки Get start)
                int result = this.fНомерСтроки;
                // *** Start programmer edit section *** (ДанныеОрг.НомерСтроки Get end)

                // *** End programmer edit section *** (ДанныеОрг.НомерСтроки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДанныеОрг.НомерСтроки Set start)

                // *** End programmer edit section *** (ДанныеОрг.НомерСтроки Set start)
                this.fНомерСтроки = value;
                // *** Start programmer edit section *** (ДанныеОрг.НомерСтроки Set end)

                // *** End programmer edit section *** (ДанныеОрг.НомерСтроки Set end)
            }
        }
        
        /// <summary>
        /// ОГРН.
        /// </summary>
        // *** Start programmer edit section *** (ДанныеОрг.ОГРН CustomAttributes)

        // *** End programmer edit section *** (ДанныеОрг.ОГРН CustomAttributes)
        public virtual int ОГРН
        {
            get
            {
                // *** Start programmer edit section *** (ДанныеОрг.ОГРН Get start)

                // *** End programmer edit section *** (ДанныеОрг.ОГРН Get start)
                int result = this.fОГРН;
                // *** Start programmer edit section *** (ДанныеОрг.ОГРН Get end)

                // *** End programmer edit section *** (ДанныеОрг.ОГРН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДанныеОрг.ОГРН Set start)

                // *** End programmer edit section *** (ДанныеОрг.ОГРН Set start)
                this.fОГРН = value;
                // *** Start programmer edit section *** (ДанныеОрг.ОГРН Set end)

                // *** End programmer edit section *** (ДанныеОрг.ОГРН Set end)
            }
        }
        
        /// <summary>
        /// ОПФ.
        /// </summary>
        // *** Start programmer edit section *** (ДанныеОрг.ОПФ CustomAttributes)

        // *** End programmer edit section *** (ДанныеОрг.ОПФ CustomAttributes)
        [StrLen(255)]
        public virtual string ОПФ
        {
            get
            {
                // *** Start programmer edit section *** (ДанныеОрг.ОПФ Get start)

                // *** End programmer edit section *** (ДанныеОрг.ОПФ Get start)
                string result = this.fОПФ;
                // *** Start programmer edit section *** (ДанныеОрг.ОПФ Get end)

                // *** End programmer edit section *** (ДанныеОрг.ОПФ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДанныеОрг.ОПФ Set start)

                // *** End programmer edit section *** (ДанныеОрг.ОПФ Set start)
                this.fОПФ = value;
                // *** Start programmer edit section *** (ДанныеОрг.ОПФ Set end)

                // *** End programmer edit section *** (ДанныеОрг.ОПФ Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (ДанныеОрг.Телефон CustomAttributes)

        // *** End programmer edit section *** (ДанныеОрг.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (ДанныеОрг.Телефон Get start)

                // *** End programmer edit section *** (ДанныеОрг.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (ДанныеОрг.Телефон Get end)

                // *** End programmer edit section *** (ДанныеОрг.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДанныеОрг.Телефон Set start)

                // *** End programmer edit section *** (ДанныеОрг.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (ДанныеОрг.Телефон Set end)

                // *** End programmer edit section *** (ДанныеОрг.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ЮрАдрес.
        /// </summary>
        // *** Start programmer edit section *** (ДанныеОрг.ЮрАдрес CustomAttributes)

        // *** End programmer edit section *** (ДанныеОрг.ЮрАдрес CustomAttributes)
        [StrLen(255)]
        public virtual string ЮрАдрес
        {
            get
            {
                // *** Start programmer edit section *** (ДанныеОрг.ЮрАдрес Get start)

                // *** End programmer edit section *** (ДанныеОрг.ЮрАдрес Get start)
                string result = this.fЮрАдрес;
                // *** Start programmer edit section *** (ДанныеОрг.ЮрАдрес Get end)

                // *** End programmer edit section *** (ДанныеОрг.ЮрАдрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДанныеОрг.ЮрАдрес Set start)

                // *** End programmer edit section *** (ДанныеОрг.ЮрАдрес Set start)
                this.fЮрАдрес = value;
                // *** Start programmer edit section *** (ДанныеОрг.ЮрАдрес Set end)

                // *** End programmer edit section *** (ДанныеОрг.ЮрАдрес Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДанныеОргE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДанныеОргE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДанныеОргE", typeof(IIS.GEN.ДанныеОрг));
                }
            }
            
            /// <summary>
            /// "ДанныеОргL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДанныеОргL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДанныеОргL", typeof(IIS.GEN.ДанныеОрг));
                }
            }
        }
    }
}
