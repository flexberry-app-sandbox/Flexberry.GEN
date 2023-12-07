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
    /// Отчет ФР.
    /// </summary>
    // *** Start programmer edit section *** (ОтчетФР CustomAttributes)

    // *** End programmer edit section *** (ОтчетФР CustomAttributes)
    [AutoAltered()]
    [Caption("Отчет ФР")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтчетФРE", new string[] {
            "Выручка as \'Выручка\'",
            "ПрочРасходы as \'Проч расходы\'",
            "ПостНалОбяз as \'Пост нал обяз\'",
            "ПрочДоходы as \'Проч доходы\'",
            "ДИРОтСотр as \'Д и р от сотр\'",
            "СумПродаж as \'Сум продаж\'",
            "СебПродаж as \'Себ продаж\'",
            "ПрочНалОбяз as \'Проч нал обяз\'",
            "УправРасходы as \'Управ расходы\'",
            "ДатаОконч as \'Дата оконч\'",
            "КомРасходы as \'Ком расходы\'",
            "ДатаНачала as \'Дата начала\'",
            "НомерСтроки as \'Номер строки\'",
            "ДанныеОрг as \'Данные орг\'",
            "ДанныеОрг.Email as \'Email\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "ДанныеОрг.Email",
            "Сотрудники.ФИО"})]
    [MasterViewDefineAttribute("ОтчетФРE", "ДанныеОрг", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Email")]
    [MasterViewDefineAttribute("ОтчетФРE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ОтчетФРL", new string[] {
            "Выручка as \'Выручка\'",
            "ПрочРасходы as \'Проч расходы\'",
            "ПостНалОбяз as \'Пост нал обяз\'",
            "ПрочДоходы as \'Проч доходы\'",
            "ДИРОтСотр as \'Д и р от сотр\'",
            "СумПродаж as \'Сум продаж\'",
            "СебПродаж as \'Себ продаж\'",
            "ПрочНалОбяз as \'Проч нал обяз\'",
            "УправРасходы as \'Управ расходы\'",
            "ДатаОконч as \'Дата оконч\'",
            "КомРасходы as \'Ком расходы\'",
            "ДатаНачала as \'Дата начала\'",
            "НомерСтроки as \'Номер строки\'",
            "ДанныеОрг.Email as \'Email\'",
            "Сотрудники.ФИО as \'ФИО\'"})]
    public class ОтчетФР : ICSSoft.STORMNET.DataObject
    {
        
        private int fВыручка;
        
        private int fПрочРасходы;
        
        private int fПостНалОбяз;
        
        private int fПрочДоходы;
        
        private int fДИРОтСотр;
        
        private int fСумПродаж;
        
        private int fСебПродаж;
        
        private int fПрочНалОбяз;
        
        private int fУправРасходы;
        
        private string fДатаОконч;
        
        private int fКомРасходы;
        
        private string fДатаНачала;
        
        private int fНомерСтроки;
        
        private IIS.GEN.ДанныеОрг fДанныеОрг;
        
        private IIS.GEN.Сотрудники fСотрудники;
        
        // *** Start programmer edit section *** (ОтчетФР CustomMembers)

        // *** End programmer edit section *** (ОтчетФР CustomMembers)

        
        /// <summary>
        /// Выручка.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.Выручка CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.Выручка CustomAttributes)
        public virtual int Выручка
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.Выручка Get start)

                // *** End programmer edit section *** (ОтчетФР.Выручка Get start)
                int result = this.fВыручка;
                // *** Start programmer edit section *** (ОтчетФР.Выручка Get end)

                // *** End programmer edit section *** (ОтчетФР.Выручка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.Выручка Set start)

                // *** End programmer edit section *** (ОтчетФР.Выручка Set start)
                this.fВыручка = value;
                // *** Start programmer edit section *** (ОтчетФР.Выручка Set end)

                // *** End programmer edit section *** (ОтчетФР.Выручка Set end)
            }
        }
        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.ДатаНачала CustomAttributes)
        [StrLen(255)]
        public virtual string ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.ДатаНачала Get start)

                // *** End programmer edit section *** (ОтчетФР.ДатаНачала Get start)
                string result = this.fДатаНачала;
                // *** Start programmer edit section *** (ОтчетФР.ДатаНачала Get end)

                // *** End programmer edit section *** (ОтчетФР.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.ДатаНачала Set start)

                // *** End programmer edit section *** (ОтчетФР.ДатаНачала Set start)
                this.fДатаНачала = value;
                // *** Start programmer edit section *** (ОтчетФР.ДатаНачала Set end)

                // *** End programmer edit section *** (ОтчетФР.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// ДатаОконч.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.ДатаОконч CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.ДатаОконч CustomAttributes)
        [StrLen(255)]
        public virtual string ДатаОконч
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.ДатаОконч Get start)

                // *** End programmer edit section *** (ОтчетФР.ДатаОконч Get start)
                string result = this.fДатаОконч;
                // *** Start programmer edit section *** (ОтчетФР.ДатаОконч Get end)

                // *** End programmer edit section *** (ОтчетФР.ДатаОконч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.ДатаОконч Set start)

                // *** End programmer edit section *** (ОтчетФР.ДатаОконч Set start)
                this.fДатаОконч = value;
                // *** Start programmer edit section *** (ОтчетФР.ДатаОконч Set end)

                // *** End programmer edit section *** (ОтчетФР.ДатаОконч Set end)
            }
        }
        
        /// <summary>
        /// ДИРОтСотр.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.ДИРОтСотр CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.ДИРОтСотр CustomAttributes)
        public virtual int ДИРОтСотр
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.ДИРОтСотр Get start)

                // *** End programmer edit section *** (ОтчетФР.ДИРОтСотр Get start)
                int result = this.fДИРОтСотр;
                // *** Start programmer edit section *** (ОтчетФР.ДИРОтСотр Get end)

                // *** End programmer edit section *** (ОтчетФР.ДИРОтСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.ДИРОтСотр Set start)

                // *** End programmer edit section *** (ОтчетФР.ДИРОтСотр Set start)
                this.fДИРОтСотр = value;
                // *** Start programmer edit section *** (ОтчетФР.ДИРОтСотр Set end)

                // *** End programmer edit section *** (ОтчетФР.ДИРОтСотр Set end)
            }
        }
        
        /// <summary>
        /// КомРасходы.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.КомРасходы CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.КомРасходы CustomAttributes)
        public virtual int КомРасходы
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.КомРасходы Get start)

                // *** End programmer edit section *** (ОтчетФР.КомРасходы Get start)
                int result = this.fКомРасходы;
                // *** Start programmer edit section *** (ОтчетФР.КомРасходы Get end)

                // *** End programmer edit section *** (ОтчетФР.КомРасходы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.КомРасходы Set start)

                // *** End programmer edit section *** (ОтчетФР.КомРасходы Set start)
                this.fКомРасходы = value;
                // *** Start programmer edit section *** (ОтчетФР.КомРасходы Set end)

                // *** End programmer edit section *** (ОтчетФР.КомРасходы Set end)
            }
        }
        
        /// <summary>
        /// НомерСтроки.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.НомерСтроки CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.НомерСтроки CustomAttributes)
        public virtual int НомерСтроки
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.НомерСтроки Get start)

                // *** End programmer edit section *** (ОтчетФР.НомерСтроки Get start)
                int result = this.fНомерСтроки;
                // *** Start programmer edit section *** (ОтчетФР.НомерСтроки Get end)

                // *** End programmer edit section *** (ОтчетФР.НомерСтроки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.НомерСтроки Set start)

                // *** End programmer edit section *** (ОтчетФР.НомерСтроки Set start)
                this.fНомерСтроки = value;
                // *** Start programmer edit section *** (ОтчетФР.НомерСтроки Set end)

                // *** End programmer edit section *** (ОтчетФР.НомерСтроки Set end)
            }
        }
        
        /// <summary>
        /// ПостНалОбяз.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.ПостНалОбяз CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.ПостНалОбяз CustomAttributes)
        public virtual int ПостНалОбяз
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.ПостНалОбяз Get start)

                // *** End programmer edit section *** (ОтчетФР.ПостНалОбяз Get start)
                int result = this.fПостНалОбяз;
                // *** Start programmer edit section *** (ОтчетФР.ПостНалОбяз Get end)

                // *** End programmer edit section *** (ОтчетФР.ПостНалОбяз Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.ПостНалОбяз Set start)

                // *** End programmer edit section *** (ОтчетФР.ПостНалОбяз Set start)
                this.fПостНалОбяз = value;
                // *** Start programmer edit section *** (ОтчетФР.ПостНалОбяз Set end)

                // *** End programmer edit section *** (ОтчетФР.ПостНалОбяз Set end)
            }
        }
        
        /// <summary>
        /// ПрочДоходы.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.ПрочДоходы CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.ПрочДоходы CustomAttributes)
        public virtual int ПрочДоходы
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.ПрочДоходы Get start)

                // *** End programmer edit section *** (ОтчетФР.ПрочДоходы Get start)
                int result = this.fПрочДоходы;
                // *** Start programmer edit section *** (ОтчетФР.ПрочДоходы Get end)

                // *** End programmer edit section *** (ОтчетФР.ПрочДоходы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.ПрочДоходы Set start)

                // *** End programmer edit section *** (ОтчетФР.ПрочДоходы Set start)
                this.fПрочДоходы = value;
                // *** Start programmer edit section *** (ОтчетФР.ПрочДоходы Set end)

                // *** End programmer edit section *** (ОтчетФР.ПрочДоходы Set end)
            }
        }
        
        /// <summary>
        /// ПрочНалОбяз.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.ПрочНалОбяз CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.ПрочНалОбяз CustomAttributes)
        public virtual int ПрочНалОбяз
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.ПрочНалОбяз Get start)

                // *** End programmer edit section *** (ОтчетФР.ПрочНалОбяз Get start)
                int result = this.fПрочНалОбяз;
                // *** Start programmer edit section *** (ОтчетФР.ПрочНалОбяз Get end)

                // *** End programmer edit section *** (ОтчетФР.ПрочНалОбяз Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.ПрочНалОбяз Set start)

                // *** End programmer edit section *** (ОтчетФР.ПрочНалОбяз Set start)
                this.fПрочНалОбяз = value;
                // *** Start programmer edit section *** (ОтчетФР.ПрочНалОбяз Set end)

                // *** End programmer edit section *** (ОтчетФР.ПрочНалОбяз Set end)
            }
        }
        
        /// <summary>
        /// ПрочРасходы.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.ПрочРасходы CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.ПрочРасходы CustomAttributes)
        public virtual int ПрочРасходы
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.ПрочРасходы Get start)

                // *** End programmer edit section *** (ОтчетФР.ПрочРасходы Get start)
                int result = this.fПрочРасходы;
                // *** Start programmer edit section *** (ОтчетФР.ПрочРасходы Get end)

                // *** End programmer edit section *** (ОтчетФР.ПрочРасходы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.ПрочРасходы Set start)

                // *** End programmer edit section *** (ОтчетФР.ПрочРасходы Set start)
                this.fПрочРасходы = value;
                // *** Start programmer edit section *** (ОтчетФР.ПрочРасходы Set end)

                // *** End programmer edit section *** (ОтчетФР.ПрочРасходы Set end)
            }
        }
        
        /// <summary>
        /// СебПродаж.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.СебПродаж CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.СебПродаж CustomAttributes)
        public virtual int СебПродаж
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.СебПродаж Get start)

                // *** End programmer edit section *** (ОтчетФР.СебПродаж Get start)
                int result = this.fСебПродаж;
                // *** Start programmer edit section *** (ОтчетФР.СебПродаж Get end)

                // *** End programmer edit section *** (ОтчетФР.СебПродаж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.СебПродаж Set start)

                // *** End programmer edit section *** (ОтчетФР.СебПродаж Set start)
                this.fСебПродаж = value;
                // *** Start programmer edit section *** (ОтчетФР.СебПродаж Set end)

                // *** End programmer edit section *** (ОтчетФР.СебПродаж Set end)
            }
        }
        
        /// <summary>
        /// СумПродаж.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.СумПродаж CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.СумПродаж CustomAttributes)
        public virtual int СумПродаж
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.СумПродаж Get start)

                // *** End programmer edit section *** (ОтчетФР.СумПродаж Get start)
                int result = this.fСумПродаж;
                // *** Start programmer edit section *** (ОтчетФР.СумПродаж Get end)

                // *** End programmer edit section *** (ОтчетФР.СумПродаж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.СумПродаж Set start)

                // *** End programmer edit section *** (ОтчетФР.СумПродаж Set start)
                this.fСумПродаж = value;
                // *** Start programmer edit section *** (ОтчетФР.СумПродаж Set end)

                // *** End programmer edit section *** (ОтчетФР.СумПродаж Set end)
            }
        }
        
        /// <summary>
        /// УправРасходы.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.УправРасходы CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.УправРасходы CustomAttributes)
        public virtual int УправРасходы
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.УправРасходы Get start)

                // *** End programmer edit section *** (ОтчетФР.УправРасходы Get start)
                int result = this.fУправРасходы;
                // *** Start programmer edit section *** (ОтчетФР.УправРасходы Get end)

                // *** End programmer edit section *** (ОтчетФР.УправРасходы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.УправРасходы Set start)

                // *** End programmer edit section *** (ОтчетФР.УправРасходы Set start)
                this.fУправРасходы = value;
                // *** Start programmer edit section *** (ОтчетФР.УправРасходы Set end)

                // *** End programmer edit section *** (ОтчетФР.УправРасходы Set end)
            }
        }
        
        /// <summary>
        /// Отчет ФР.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.ДанныеОрг CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.ДанныеОрг CustomAttributes)
        [PropertyStorage(new string[] {
                "ДанныеОрг"})]
        [NotNull()]
        public virtual IIS.GEN.ДанныеОрг ДанныеОрг
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.ДанныеОрг Get start)

                // *** End programmer edit section *** (ОтчетФР.ДанныеОрг Get start)
                IIS.GEN.ДанныеОрг result = this.fДанныеОрг;
                // *** Start programmer edit section *** (ОтчетФР.ДанныеОрг Get end)

                // *** End programmer edit section *** (ОтчетФР.ДанныеОрг Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.ДанныеОрг Set start)

                // *** End programmer edit section *** (ОтчетФР.ДанныеОрг Set start)
                this.fДанныеОрг = value;
                // *** Start programmer edit section *** (ОтчетФР.ДанныеОрг Set end)

                // *** End programmer edit section *** (ОтчетФР.ДанныеОрг Set end)
            }
        }
        
        /// <summary>
        /// Отчет ФР.
        /// </summary>
        // *** Start programmer edit section *** (ОтчетФР.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (ОтчетФР.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.GEN.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (ОтчетФР.Сотрудники Get start)

                // *** End programmer edit section *** (ОтчетФР.Сотрудники Get start)
                IIS.GEN.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (ОтчетФР.Сотрудники Get end)

                // *** End programmer edit section *** (ОтчетФР.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтчетФР.Сотрудники Set start)

                // *** End programmer edit section *** (ОтчетФР.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (ОтчетФР.Сотрудники Set end)

                // *** End programmer edit section *** (ОтчетФР.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтчетФРE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтчетФРE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтчетФРE", typeof(IIS.GEN.ОтчетФР));
                }
            }
            
            /// <summary>
            /// "ОтчетФРL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтчетФРL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтчетФРL", typeof(IIS.GEN.ОтчетФР));
                }
            }
        }
    }
}
