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
    /// Номенклатура.
    /// </summary>
    // *** Start programmer edit section *** (Номенклатура CustomAttributes)

    // *** End programmer edit section *** (Номенклатура CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    public class Номенклатура : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодПозиции;
        
        private string fНаименование;
        
        private IIS.GEN.ЕдИзм fЕдИзм;
        
        // *** Start programmer edit section *** (Номенклатура CustomMembers)

        // *** End programmer edit section *** (Номенклатура CustomMembers)

        
        /// <summary>
        /// КодПозиции.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.КодПозиции CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.КодПозиции CustomAttributes)
        public virtual int КодПозиции
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.КодПозиции Get start)

                // *** End programmer edit section *** (Номенклатура.КодПозиции Get start)
                int result = this.fКодПозиции;
                // *** Start programmer edit section *** (Номенклатура.КодПозиции Get end)

                // *** End programmer edit section *** (Номенклатура.КодПозиции Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.КодПозиции Set start)

                // *** End programmer edit section *** (Номенклатура.КодПозиции Set start)
                this.fКодПозиции = value;
                // *** Start programmer edit section *** (Номенклатура.КодПозиции Set end)

                // *** End programmer edit section *** (Номенклатура.КодПозиции Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.Наименование CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.Наименование Get start)

                // *** End programmer edit section *** (Номенклатура.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Номенклатура.Наименование Get end)

                // *** End programmer edit section *** (Номенклатура.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.Наименование Set start)

                // *** End programmer edit section *** (Номенклатура.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Номенклатура.Наименование Set end)

                // *** End programmer edit section *** (Номенклатура.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Номенклатура.
        /// </summary>
        // *** Start programmer edit section *** (Номенклатура.ЕдИзм CustomAttributes)

        // *** End programmer edit section *** (Номенклатура.ЕдИзм CustomAttributes)
        [PropertyStorage(new string[] {
                "ЕдИзм"})]
        [NotNull()]
        public virtual IIS.GEN.ЕдИзм ЕдИзм
        {
            get
            {
                // *** Start programmer edit section *** (Номенклатура.ЕдИзм Get start)

                // *** End programmer edit section *** (Номенклатура.ЕдИзм Get start)
                IIS.GEN.ЕдИзм result = this.fЕдИзм;
                // *** Start programmer edit section *** (Номенклатура.ЕдИзм Get end)

                // *** End programmer edit section *** (Номенклатура.ЕдИзм Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Номенклатура.ЕдИзм Set start)

                // *** End programmer edit section *** (Номенклатура.ЕдИзм Set start)
                this.fЕдИзм = value;
                // *** Start programmer edit section *** (Номенклатура.ЕдИзм Set end)

                // *** End programmer edit section *** (Номенклатура.ЕдИзм Set end)
            }
        }
    }
}
