package GEN.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import GEN.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПриказОУЦ
 */
@Entity(name = "IISGENПриказОУЦ")
@Table(schema = "public", name = "ПриказОУЦ")
public class PrikazOUC {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаСозд")
    private String датасозд;

    @Column(name = "НомерДок")
    private Integer номердок;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public PrikazOUC() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getДатаСозд() {
      return датасозд;
    }

    public void setДатаСозд(String датасозд) {
      this.датасозд = датасозд;
    }

    public Integer getНомерДок() {
      return номердок;
    }

    public void setНомерДок(Integer номердок) {
      this.номердок = номердок;
    }


}