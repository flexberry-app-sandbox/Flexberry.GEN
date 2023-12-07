



CREATE TABLE "ЕдИзм"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерСтроки" NUMBER(10) NULL,

	"Единица" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПриказОУЦ"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаСозд" NVARCHAR2(255) NULL,

	"НомерДок" NUMBER(10) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТабТовары"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерСтроки" NUMBER(10) NULL,

	"ПланНаМесяц" NUMBER(10) NULL,

	"ИтогоЗаГод" NUMBER(10) NULL,

	"РазмерПрод" NUMBER(10) NULL,

	"НаимМесяца" NVARCHAR2(255) NULL,

	"Номенклатура" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтчетФР"
(

	"primaryKey" RAW(16) NOT NULL,

	"Выручка" NUMBER(10) NULL,

	"ПрочРасходы" NUMBER(10) NULL,

	"ПостНалОбяз" NUMBER(10) NULL,

	"ПрочДоходы" NUMBER(10) NULL,

	"ДИРОтСотр" NUMBER(10) NULL,

	"СумПродаж" NUMBER(10) NULL,

	"СебПродаж" NUMBER(10) NULL,

	"ПрочНалОбяз" NUMBER(10) NULL,

	"УправРасходы" NUMBER(10) NULL,

	"ДатаОконч" NVARCHAR2(255) NULL,

	"КомРасходы" NUMBER(10) NULL,

	"ДатаНачала" NVARCHAR2(255) NULL,

	"НомерСтроки" NUMBER(10) NULL,

	"ДанныеОрг" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПланПродаж"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерДок" NUMBER(10) NULL,

	"ДатаСозд" NVARCHAR2(255) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТабМенеджер"
(

	"primaryKey" RAW(16) NOT NULL,

	"ПланНаМесяц" NUMBER(10) NULL,

	"ИтогоЗаГод" NUMBER(10) NULL,

	"НомерСтроки" NUMBER(10) NULL,

	"НаимМесяца" NVARCHAR2(255) NULL,

	"РазмерПрод" NUMBER(10) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТабОУЦ"
(

	"primaryKey" RAW(16) NOT NULL,

	"Цена" NUMBER(10) NULL,

	"НомерСтроки" NUMBER(10) NULL,

	"ДатаОконч" NVARCHAR2(255) NULL,

	"ДатаНач" NVARCHAR2(255) NULL,

	"Номенклатура" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДанныеОрг"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерСтроки" NUMBER(10) NULL,

	"Email" NVARCHAR2(255) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"ОГРН" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"ОПФ" NVARCHAR2(255) NULL,

	"ЮрАдрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Обязанности" NVARCHAR2(255) NULL,

	"IDДолжности" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Номенклатура"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодПозиции" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"ЕдИзм" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDСотрудника" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ПриказОУЦ"
	ADD CONSTRAINT "ПриказОУЦ_FСо_8697" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ПриказОУЦ_IСо_3358" on "ПриказОУЦ" ("Сотрудники");

ALTER TABLE "ТабТовары"
	ADD CONSTRAINT "ТабТовары_FНо_3737" FOREIGN KEY ("Номенклатура") REFERENCES "Номенклатура" ("primaryKey");

CREATE INDEX "ТабТовары_IНо_4112" on "ТабТовары" ("Номенклатура");

ALTER TABLE "ОтчетФР"
	ADD CONSTRAINT "ОтчетФР_FДанн_8913" FOREIGN KEY ("ДанныеОрг") REFERENCES "ДанныеОрг" ("primaryKey");

CREATE INDEX "ОтчетФР_IДанны_154" on "ОтчетФР" ("ДанныеОрг");

ALTER TABLE "ОтчетФР"
	ADD CONSTRAINT "ОтчетФР_FСотр_1343" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ОтчетФР_IСотр_3968" on "ОтчетФР" ("Сотрудники");

ALTER TABLE "ПланПродаж"
	ADD CONSTRAINT "ПланПродаж_FСо_64" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ПланПродаж_IС_4847" on "ПланПродаж" ("Сотрудники");

ALTER TABLE "ТабМенеджер"
	ADD CONSTRAINT "ТабМенеджер_F_9085" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ТабМенеджер_IС_705" on "ТабМенеджер" ("Сотрудники");

ALTER TABLE "ТабОУЦ"
	ADD CONSTRAINT "ТабОУЦ_FНомен_8786" FOREIGN KEY ("Номенклатура") REFERENCES "Номенклатура" ("primaryKey");

CREATE INDEX "ТабОУЦ_IНоменк_822" on "ТабОУЦ" ("Номенклатура");

ALTER TABLE "Номенклатура"
	ADD CONSTRAINT "Номенклатура__5256" FOREIGN KEY ("ЕдИзм") REFERENCES "ЕдИзм" ("primaryKey");

CREATE INDEX "Номенклатура__3929" on "Номенклатура" ("ЕдИзм");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_4635" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6967" on "Сотрудники" ("Должности");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


