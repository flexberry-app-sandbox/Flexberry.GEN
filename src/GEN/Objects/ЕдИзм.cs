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
    /// Ед изм.
    /// </summary>
    // *** Start programmer edit section *** (ЕдИзм CustomAttributes)

    // *** End programmer edit section *** (ЕдИзм CustomAttributes)
    [AutoAltered()]
    [Caption("Ед изм")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЕдИзмE", new string[] {
            "НомерСтроки as \'Номер строки\'",
            "Единица as \'Единица\'"})]
    [View("ЕдИзмL", new string[] {
            "НомерСтроки as \'Номер строки\'",
            "Единица as \'Единица\'"})]
    public class ЕдИзм : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерСтроки;
        
        private string fЕдиница;
        
        // *** Start programmer edit section *** (ЕдИзм CustomMembers)

        // *** End programmer edit section *** (ЕдИзм CustomMembers)

        
        /// <summary>
        /// Единица.
        /// </summary>
        // *** Start programmer edit section *** (ЕдИзм.Единица CustomAttributes)

        // *** End programmer edit section *** (ЕдИзм.Единица CustomAttributes)
        [StrLen(255)]
        public virtual string Единица
        {
            get
            {
                // *** Start programmer edit section *** (ЕдИзм.Единица Get start)

                // *** End programmer edit section *** (ЕдИзм.Единица Get start)
                string result = this.fЕдиница;
                // *** Start programmer edit section *** (ЕдИзм.Единица Get end)

                // *** End programmer edit section *** (ЕдИзм.Единица Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЕдИзм.Единица Set start)

                // *** End programmer edit section *** (ЕдИзм.Единица Set start)
                this.fЕдиница = value;
                // *** Start programmer edit section *** (ЕдИзм.Единица Set end)

                // *** End programmer edit section *** (ЕдИзм.Единица Set end)
            }
        }
        
        /// <summary>
        /// НомерСтроки.
        /// </summary>
        // *** Start programmer edit section *** (ЕдИзм.НомерСтроки CustomAttributes)

        // *** End programmer edit section *** (ЕдИзм.НомерСтроки CustomAttributes)
        public virtual int НомерСтроки
        {
            get
            {
                // *** Start programmer edit section *** (ЕдИзм.НомерСтроки Get start)

                // *** End programmer edit section *** (ЕдИзм.НомерСтроки Get start)
                int result = this.fНомерСтроки;
                // *** Start programmer edit section *** (ЕдИзм.НомерСтроки Get end)

                // *** End programmer edit section *** (ЕдИзм.НомерСтроки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЕдИзм.НомерСтроки Set start)

                // *** End programmer edit section *** (ЕдИзм.НомерСтроки Set start)
                this.fНомерСтроки = value;
                // *** Start programmer edit section *** (ЕдИзм.НомерСтроки Set end)

                // *** End programmer edit section *** (ЕдИзм.НомерСтроки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЕдИзмE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЕдИзмE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЕдИзмE", typeof(IIS.GEN.ЕдИзм));
                }
            }
            
            /// <summary>
            /// "ЕдИзмL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЕдИзмL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЕдИзмL", typeof(IIS.GEN.ЕдИзм));
                }
            }
        }
    }
}
