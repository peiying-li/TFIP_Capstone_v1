package main.repository;

import main.entities.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AgeCategoryRepo extends JpaRepository<Inventory, Integer> {

    @Query("SELECT i FROM Inventory i WHERE i.ageCategory.ageGrpId=:ageGrpId ")
    List<Inventory> getItemsByAgeGrpId(@Param("ageGrpId") Integer ageGrpId);

    @Query("SELECT i FROM Inventory i WHERE i.ageCategory.ageGrpId=:ageGrpId AND i.itemCondition.itemConditionId <> null AND i.isReserved = 0")
    List<Inventory> getDonationsByAgeGrpId(@Param("ageGrpId") Integer ageGrpId);

    @Query("SELECT a.ageGrpId FROM AgeCategory a WHERE a.ageGrpName =:ageGrpName")
    Integer getAgeGrpIdByAgeGrpName(@Param("ageGrpName") String ageGrpName);

}
