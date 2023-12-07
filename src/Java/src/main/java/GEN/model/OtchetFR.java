package GEN.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import GEN.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ОтчетФР
 */
@Entity(name = "IISGENОтчетФР")
@Table(schema = "public", name = "ОтчетФР")
public class OtchetFR {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Выручка")
    private Integer выручка;

    @Column(name = "ПрочРасходы")
    private Integer прочрасходы;

    @Column(name = "ПостНалОбяз")
    private Integer постналобяз;

    @Column(name = "ПрочДоходы")
    private Integer прочдоходы;

    @Column(name = "ДИРОтСотр")
    private Integer диротсотр;

    @Column(name = "СумПродаж")
    private Integer сумпродаж;

    @Column(name = "СебПродаж")
    private Integer себпродаж;

    @Column(name = "ПрочНалОбяз")
    private Integer прочналобяз;

    @Column(name = "УправРасходы")
    private Integer управрасходы;

    @Column(name = "ДатаОконч")
    private String датаоконч;

    @Column(name = "КомРасходы")
    private Integer комрасходы;

    @Column(name = "ДатаНачала")
    private String датаначала;

    @Column(name = "НомерСтроки")
    private Integer номерстроки;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DannyeOrg")
    @Convert("DannyeOrg")
    @Column(name = "ДанныеОрг", length = 16, unique = true, nullable = false)
    private UUID _dannyeorgid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DannyeOrg", insertable = false, updatable = false)
    private DannyeOrg dannyeorg;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public OtchetFR() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getВыручка() {
      return выручка;
    }

    public void setВыручка(Integer выручка) {
      this.выручка = выручка;
    }

    public Integer getПрочРасходы() {
      return прочрасходы;
    }

    public void setПрочРасходы(Integer прочрасходы) {
      this.прочрасходы = прочрасходы;
    }

    public Integer getПостНалОбяз() {
      return постналобяз;
    }

    public void setПостНалОбяз(Integer постналобяз) {
      this.постналобяз = постналобяз;
    }

    public Integer getПрочДоходы() {
      return прочдоходы;
    }

    public void setПрочДоходы(Integer прочдоходы) {
      this.прочдоходы = прочдоходы;
    }

    public Integer getДИРОтСотр() {
      return диротсотр;
    }

    public void setДИРОтСотр(Integer диротсотр) {
      this.диротсотр = диротсотр;
    }

    public Integer getСумПродаж() {
      return сумпродаж;
    }

    public void setСумПродаж(Integer сумпродаж) {
      this.сумпродаж = сумпродаж;
    }

    public Integer getСебПродаж() {
      return себпродаж;
    }

    public void setСебПродаж(Integer себпродаж) {
      this.себпродаж = себпродаж;
    }

    public Integer getПрочНалОбяз() {
      return прочналобяз;
    }

    public void setПрочНалОбяз(Integer прочналобяз) {
      this.прочналобяз = прочналобяз;
    }

    public Integer getУправРасходы() {
      return управрасходы;
    }

    public void setУправРасходы(Integer управрасходы) {
      this.управрасходы = управрасходы;
    }

    public String getДатаОконч() {
      return датаоконч;
    }

    public void setДатаОконч(String датаоконч) {
      this.датаоконч = датаоконч;
    }

    public Integer getКомРасходы() {
      return комрасходы;
    }

    public void setКомРасходы(Integer комрасходы) {
      this.комрасходы = комрасходы;
    }

    public String getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(String датаначала) {
      this.датаначала = датаначала;
    }

    public Integer getНомерСтроки() {
      return номерстроки;
    }

    public void setНомерСтроки(Integer номерстроки) {
      this.номерстроки = номерстроки;
    }


}