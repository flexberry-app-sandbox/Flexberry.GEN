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
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private int fIDСотрудника;
        
        private int fТелефон;
        
        private string fФИО;
        
        private IIS.GEN.Должности fДолжности;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// IDСотрудника.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.IDСотрудника CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.IDСотрудника CustomAttributes)
        public virtual int IDСотрудника
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.IDСотрудника Get start)

                // *** End programmer edit section *** (Сотрудники.IDСотрудника Get start)
                int result = this.fIDСотрудника;
                // *** Start programmer edit section *** (Сотрудники.IDСотрудника Get end)

                // *** End programmer edit section *** (Сотрудники.IDСотрудника Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.IDСотрудника Set start)

                // *** End programmer edit section *** (Сотрудники.IDСотрудника Set start)
                this.fIDСотрудника = value;
                // *** Start programmer edit section *** (Сотрудники.IDСотрудника Set end)

                // *** End programmer edit section *** (Сотрудники.IDСотрудника Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Телефон CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Телефон Get start)

                // *** End programmer edit section *** (Сотрудники.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (Сотрудники.Телефон Get end)

                // *** End programmer edit section *** (Сотрудники.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Телефон Set start)

                // *** End programmer edit section *** (Сотрудники.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Сотрудники.Телефон Set end)

                // *** End programmer edit section *** (Сотрудники.Телефон Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ФИО CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Get start)

                // *** End programmer edit section *** (Сотрудники.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Сотрудники.ФИО Get end)

                // *** End programmer edit section *** (Сотрудники.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Set start)

                // *** End programmer edit section *** (Сотрудники.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Сотрудники.ФИО Set end)

                // *** End programmer edit section *** (Сотрудники.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Должности CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Должности CustomAttributes)
        [PropertyStorage(new string[] {
                "Должности"})]
        [NotNull()]
        public virtual IIS.GEN.Должности Должности
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Должности Get start)

                // *** End programmer edit section *** (Сотрудники.Должности Get start)
                IIS.GEN.Должности result = this.fДолжности;
                // *** Start programmer edit section *** (Сотрудники.Должности Get end)

                // *** End programmer edit section *** (Сотрудники.Должности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Должности Set start)

                // *** End programmer edit section *** (Сотрудники.Должности Set start)
                this.fДолжности = value;
                // *** Start programmer edit section *** (Сотрудники.Должности Set end)

                // *** End programmer edit section *** (Сотрудники.Должности Set end)
            }
        }
    }
}
