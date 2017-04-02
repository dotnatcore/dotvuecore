namespace DotVueCore.ViewModel.Base
{
    public abstract partial class UpdatableParentBaseViewModel<TC, T> : UpdatableBaseViewModel<TC, T>
        where T : class
        where TC : UpdatableParentBaseViewModel<TC, T>
    {

    }
}
