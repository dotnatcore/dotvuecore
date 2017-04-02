using DotVueCore.DataAccess.Entities;
using Newtonsoft.Json;

namespace DotVueCore.ViewModel.Base
{
    public abstract partial class UpdatableBaseViewModel<TC, T>: EntityBase
    {
        [JsonIgnore]
        public bool IsNew { get; set; }
        [JsonIgnore]
        public bool IsDirty { get; set; }
        [JsonIgnore]
        public bool IsDeleted { get; set; }
    }
}
